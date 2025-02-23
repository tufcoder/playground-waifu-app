import { useState } from 'react'
import axios from 'axios'

import {
  AppContainer,
  Title,
  Categories,
  Button,
  WaifusContainer,
} from './styles'
import { Card } from '../Card'


export default function App() {
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
  // const DOTNET_BACKEND = 'http://localhost:5280/api/waifu'
  // const MINIMAL_DOTNET_BACKEND = 'http://localhost:5100/api/waifu'
  // const NODEJS_BACKEND = 'http://localhost:1337/api/waifu'
  const NODEJS_BACKEND_MANY = 'http://localhost:1337/api/many'

  const getManyRandomData = async () => {
    if (category === '' || category === '-1') {
      return
    }
    setLoading(true)
    try {
      const response = await axios.post(NODEJS_BACKEND_MANY, {
        type: 'sfw',
        category: category
      })
      setWaifus(response.data.files)
    } catch (error) {
      console.error(`Error fetching waifu: ${NODEJS_BACKEND_MANY}`, error)
      setWaifus(null)
    } finally {
      setLoading(false)
    }
  }

  const handleChangeCategory = (e) => {
    setCategory(e.currentTarget.value)
  }

  return (
    <AppContainer>
      <Title>Waifu.pics  Generator</Title>
      <Categories
        name="categories"
        onChange={handleChangeCategory}
      >
        <option value="-1" defaultValue={-1}>-- Select a category --</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </Categories>
      <Button
        onClick={getManyRandomData}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Generate'}
      </Button>
      <WaifusContainer>
        {
          waifus.length > 0 &&
          waifus.map(waifu => (
            <Card key={waifu} waifu={waifu} loading={loading} />
          ))
        }
      </WaifusContainer>
    </AppContainer>
  )
}
