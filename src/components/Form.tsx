import { useForm } from "react-hook-form"
import { currencies } from "../data"
import { useCriptoStore } from "../store"
import { Search } from "../types"
import Error from "./Error"

const Form = () => {

    const currencyCrypto = useCriptoStore(state => state.currencyCrypto) 
    const fetchResultCripto = useCriptoStore(state => state.fetchResultCripto)
    
    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset
      } = useForm<Search>() 

    const searchCripto = (data : Search) => {
        fetchResultCripto(data)
        reset()
    }

  return (
    <form
        className=" space-y-3"
        noValidate
        onSubmit={handleSubmit(searchCripto)}
    >
        <div className=" space-y-2">
            <label
                className=" uppercase text-gray-700 font-bold" 
                htmlFor="currency"
            >Moneda:</label>
            <select
                className=" w-full py-2 px-4 border"
                id="currency"
                {...register('currency', {
                    required: 'La Moneda es requerida'
                })}
            >
                <option value="">--Seleccione una Moneda--</option>
                {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
            {errors.currency && (
                <Error>{errors.currency.message}</Error>
            )}
        </div>
        <div className=" space-y-2">
            <label 
                className=" uppercase text-gray-700 font-bold" 
                htmlFor="criptomoneda"
            >Criptomoneda:</label>
            <select 
                className=" w-full py-2 px-4 border"
                id="criptomoneda"
                {...register('criptomoneda', {
                    required: 'La Criptomoneda es requerida'
                })}
            >
                <option value="">--Seleccione una Criptomoneda--</option>
                {currencyCrypto.map(criptos => (
                    <option key={criptos.CoinInfo.Name} value={criptos.CoinInfo.Name}>{criptos.CoinInfo.FullName}</option>
                ))}
            </select>
            {errors.criptomoneda && (
                <Error>{errors.criptomoneda.message}</Error>
            )}
        </div>
        <input 
            type="submit" 
            value={'Cotizar'}
            className="w-full text-center text-white font-black uppercase cursor-pointer py-2 rounded-md bg-emerald-400 hover:bg-emerald-600 transition-all"
        />
    </form>
  )
}

export default Form