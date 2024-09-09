import { useEffect } from "react"
import Form from "./components/Form"
import { useCriptoStore } from "./store"
import Result from "./components/Result"
import Spinner from "./components/Spinner"


function App() {

  const fetchCripto = useCriptoStore(state => state.fetchCripto)
  const priceCrypto = useCriptoStore(state => state.priceCrypto)
  const spinner = useCriptoStore(state => state.spinner)
  

  useEffect(() => {
    fetchCripto()
  }, [])
  

  return (
    <>
      <div className=" md:w-1/2 mx-auto w-[80%]">
        <h1 className=" py-10 font-black text-white text-4xl leading-5">Cotizador de <span className="block text-emerald-300 text-5xl">Criptomonedas</span></h1>

        <main className="bg-white py-10 px-5 rounded-md shadow-lg space-y-3">
          <Form />
          {spinner && <Spinner />}
          { Object.keys(priceCrypto).length !== 0 && <Result />}
        </main>


      </div>
    </>
  )
}

export default App
