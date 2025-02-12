import { useState } from 'react'
import axios from 'axios'
import Card from './components/Card';
import './App.css'

function App() {
  // const [waifu, setWaifu] = useState(null)
  const [loading, setLoading] = useState(false)
  const [waifus, setWaifus] = useState([])
  // const DOTNET_BACKEND = 'http://localhost:5280/api/waifu'
  // const MINIMAL_DOTNET_BACKEND = 'http://localhost:5100/api/waifu'
  // const NODEJS_BACKEND = 'http://localhost:1337/api/waifu'
  const NODEJS_BACKEND_MANY = 'http://localhost:1337/api/many/waifu'

  // const fetchWaifu = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await fetch(NODEJS_BACKEND)
  //     if (!response.ok) {
  //       console.error(`HTTP error! status: ${response.status}`)
  //     }
  //     const data = await response.json()
  //     setWaifu(data.url)
  //   } catch (error) {
  //     console.error(`Error fetching waifu: ${NODEJS_BACKEND}`, error)
  //     setWaifu(null)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const fetchManyWaifus = async () => {
    setLoading(true)
    try {
      const response = await axios.post(NODEJS_BACKEND_MANY, {})
      setWaifus(response.data.files)
    } catch (error) {
      console.error(`Error fetching waifu: ${NODEJS_BACKEND_MANY}`, error)
      setWaifus(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <h1 className='title'>Waifus Generator</h1>
      <div className='waifus-container'>
        {
          waifus &&
          waifus.map(waifu => (
            <Card key={waifu} waifu={waifu} loading={loading} />
          ))
        }
      </div>
      <button className='button' onClick={fetchManyWaifus} disabled={loading}>
        {loading ? 'Loading...' : 'Generate'}
      </button>
    </div>
  )
}

export default App
