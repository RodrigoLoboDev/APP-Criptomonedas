import { useCriptoStore } from "../store"

const Result = () => {

   const priceCrypto = useCriptoStore(state => state.priceCrypto)
   console.log(priceCrypto.IMAGEURL);
   
  return (
    <div>
        <h2 className=" text-4xl text-center font-black py-10">Cotización</h2>

        <div className=" flex flex-col md:flex-row gap-3 items-center justify-center">
            <img 
                className=" w-1/3"
                src={`https://cryptocompare.com${priceCrypto.IMAGEURL}`} alt="imagen crypto" 
            />
            <div 
                className=" space-y-2 w-2/3"
            >
                <p>El precio es de: <span className=" font-bold">{priceCrypto.PRICE}</span></p>
                <p>El precio más alto del día: <span className=" font-bold">{priceCrypto.HIGHDAY}</span></p>
                <p>El precio más bajo del día: <span className=" font-bold">{priceCrypto.LOWDAY}</span></p>
                <p>Variaciones últimas 24 horas: <span className=" font-bold">{priceCrypto.CHANGEPCT24HOUR}</span></p>
                <p>Última actualización: <span className=" font-bold">{priceCrypto.LASTUPDATE}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Result