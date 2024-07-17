const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

 
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)

    res.json({'sound': '야옹'})
})  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})