import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const [waifu, setWaifu] = useState(null)
  const [loading, setLoading] = useState(false)
  // const DOTNET_BACKEND = 'http://localhost:5280/api/waifu'
  // const MINIMAL_DOTNET_BACKEND = 'http://localhost:5100/api/waifu'
  const NODEJS_BACKEND = 'http://localhost:1337/api/waifu'

  const fetchWaifu = async () => {
    setLoading(true)
    try {
      const response = await fetch(NODEJS_BACKEND)
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setWaifu(data.url)
    } catch (error) {
      console.error(`Error fetching waifu: ${NODEJS_BACKEND}`, error)
      setWaifu(null)
    } finally {
      setLoading(false)
    }
  }

  // const fetchWaifu = async () => {
  //   setLoading(true)
  //   await new Promise(resolve => setTimeout(resolve, 1000))
  //   setWaifu('https://i.waifu.pics/BwHGNNK.png')
  //   setLoading(false)
  // }

  return (
    <div className="App">
      <h1>Waifus Generator</h1>
      <Card waifu={waifu} loading={loading} />
      <button className='button' onClick={fetchWaifu} disabled={loading}>
        {loading ? 'Loading...' : 'Generate New Waifu'}
      </button>
    </div>
  )
}

export default App
