const path = require('path')
const app = require('express')()


app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './about.html'))
})
app.get('/contact-me', (req, res) => {
  res.sendFile(path.resolve(__dirname, './contact-me.html'))
})
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './404.html'))
})

app.listen(3000, () =>{
  console.log('listening on port: 3000')
})

