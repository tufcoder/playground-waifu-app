import { useState } from 'react'
import axios from 'axios'

import { categories } from './assets/categories'
import { Card } from './components/Card'

import styles from './App.module.css'

const api = import.meta.env.VITE_API_URL

export default function App() {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState(null)

  function handleChangeCategory(e) {
    setCategory(e.target.value)
  }

  async function handleClickGenerate() {
    if (category == null || category === '-1') {
      return
    }
    setLoading(true)
    try {
      const response = await axios.post(
        `${api}/${category}`,
        {}
      )
      setFiles(response.data.files)
    } catch (error) {
      console.error(`Error fetching waifu api`, error)
      setFiles(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className={styles.appContainer}>
        <h1 className={styles.title}>Waifu.pics Generator</h1>
        <div className={styles.optionsContainer}>
          <select
            id="categories"
            className={styles.categories}
            onChange={handleChangeCategory}
          >
            <option value="-1">- Select a Category -</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button
            className={styles.buttonGenerate}
            onClick={handleClickGenerate}
            disabled={loading}
          >
            Generate
          </button>
        </div>
        <div className={styles.waifusContainer}>
          {files.length > 0 && files.map(file => (
            <Card key={file} file={file} />
          ))}
        </div>
      </div>
    </>
  )
}
