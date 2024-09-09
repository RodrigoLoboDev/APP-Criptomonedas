import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Search, CryptoCurrencies, CryptoPrice } from "./types";
import { CryptoCurrenciesSchema, CryptoPriceSchema } from "./schema/crypto-schema";


// type del state
type CriptoState = {
    currencyCrypto: CryptoCurrencies
    priceCrypto: CryptoPrice
    spinner: boolean
    fetchCripto: () => Promise<void> // void no retorna nada
    fetchResultCripto: (pear : Search) => Promise<void>
}

// Nuestro hook
export const useCriptoStore = create<CriptoState>()(devtools((set) => ({
    currencyCrypto: [],
    priceCrypto: {} as CryptoPrice,
    spinner: false,
    fetchCripto: async () => {
        
        try {
            const urlTopList = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const {data : { Data }} = await axios(urlTopList)
            const result = CryptoCurrenciesSchema.safeParse(Data)
            if (result.success) {
                set(() => ({
                    currencyCrypto: result.data
                })) 
            }

        } catch (error) {
            console.log(error);
        }
    },
    fetchResultCripto: async (pear) => {

        // resetear el state
        set(() => ({
            spinner: true
        }));

        set((state) => ({
            priceCrypto: state.priceCrypto = {} as CryptoPrice
        }));

        try {
            const urlCripto = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pear.criptomoneda}&tsyms=${pear.currency}`

            const {data : {DISPLAY}} = await axios(urlCripto)
            console.log(DISPLAY[pear.criptomoneda][pear.currency]);
            
            const result = CryptoPriceSchema.safeParse(DISPLAY[pear.criptomoneda][pear.currency])
            if (result.success) {
                set(() => ({
                    priceCrypto: result.data
                })) 
            }

        } catch (error) {
            console.log(error);
        } finally {
            set(() => ({
                spinner: false
            }));
        }
        
    }
    })
))