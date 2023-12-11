
import './App.css'
import Card from "./components/card"

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Amigo" btnText="Click me!" />
      <Card username="Ahad" btnText="Visit me!" />
    </>
  )
}

export default App
