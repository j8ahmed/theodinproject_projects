// Basic Information Site (Server)

const http = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  /*
   * What is needed:
   * - clean request url to determine which file to send
   * - Set the Correct headers to send an html file as a response to the HTTP request
   * - Use the fs module to get the file and send it back to the client
   *
   */

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  let page
  switch(req.url){
    case '/':
      page = 'index.html'
      break

    case '/contact-me':
      page = 'contact-me.html'
      break

    case '/about':
      page = 'about.html'
      break

    default:
      page = '404.html'
  }

  const filePath = path.resolve(__dirname, page)
  const readStream = fs.createReadStream(filePath)
  readStream.on('open', () => {
    readStream.pipe(res)
  })

  readStream.on('error', (err) => {
    console.error(err)
    res.end(err)
  })

})

server.listen(port, ()=>{
  console.log("Connection made")
})
