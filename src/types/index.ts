import { z } from 'zod'
import { CurrencySchema, CryptoCurrencySchema, CryptoCurrenciesSchema, CryptoPriceSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema >

export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesSchema >

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>

export type Search = {
    currency: string
    criptomoneda: string
}