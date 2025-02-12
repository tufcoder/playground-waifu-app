import { useState } from 'react'
import axios from 'axios'
import Card from './components/Card';
import './App.css'

function App() {
  // const [waifu, setWaifu] = useState(null)
  const [loading, setLoading] = useState(false)
  const [waifus, setWaifus] = useState([])
  const [category, setCategory] = useState('')
  const categories = [
    'waifu',
    'neko',
    'shinobu',
    'megumin',
    'bully',
    'cuddle',
    'cry',
    'hug',
    'awoo',
    'kiss',
    'lick',
    'pat',
    'smug',
    'bonk',
    'yeet',
    'blush',
    'smile',
    'wave',
    'highfive',
    'handhold',
    'nom',
    'bite',
    'glomp',
    'slap',
    'kill',
    'kick',
    'happy',
    'wink',
    'poke',
    'dance',
    'cringe'
  ]
  let randomIndex = -1
  // const DOTNET_BACKEND = 'http://localhost:5280/api/waifu'
  // const MINIMAL_DOTNET_BACKEND = 'http://localhost:5100/api/waifu'
  // const NODEJS_BACKEND = 'http://localhost:1337/api/waifu'
  const NODEJS_BACKEND_MANY = 'http://localhost:1337/api/many'

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

  const getManyRandom = async () => {
    setLoading(true)
    try {
      randomIndex = Math.floor(Math.random() * categories.length)
      const randomCategory = categories[randomIndex]
      setCategory(randomCategory)
      const response = await axios.post(NODEJS_BACKEND_MANY, {
        type: 'sfw',
        category: randomCategory
      })
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
      <h1 className='title'>Waifus Random Generator</h1>
      <button className='button' onClick={getManyRandom} disabled={loading}>
        {loading ? 'Loading...' : 'Generate'}
      </button>
      <h2 className='subtitle'>
        {
          waifus.length > 0 &&
          `Category: ${category}`
        }
      </h2>
      <div className='waifus-container'>
        {
          waifus.length > 0 &&
          waifus.map(waifu => (
            <Card key={waifu} waifu={waifu} loading={loading} />
          ))
        }
      </div>
    </div>
  )
}

export default App
