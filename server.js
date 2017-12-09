const express = require('express')
const path = require('path')

const app = express()
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/data', express.static(path.join(__dirname, 'data')))
app.use('/icons', express.static(path.join(__dirname, 'node_modules', 'ionicons/dist/css')))


app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))