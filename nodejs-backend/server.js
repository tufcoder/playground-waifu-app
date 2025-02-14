const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 1337

const URL_API = 'https://api.waifu.pics'

app.use(cors())
app.use(express.json())

app.get('/api/waifu', async (req, res) => {
  try {
    const response = await axios.get(
      `${URL_API}/sfw/waifu`
    )
    res.send(response.data)
  } catch (error) {
    res.status(500).send({
      error: 'Server error: fetching waifu pics api'
    })
  }
})

app.post('/api/many', async (req, res) => {
  try {
    const { type, category } = req.body
    const response = await axios.post(
      `${URL_API}/many/${type}/${category}`,
      {}
    )
    res.send(response.data)
  } catch (error) {
    res.status(500).send({
      error: 'Server error: fetching waifu pics api'
    })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Server listening on port: ${PORT}`)
})
