const express = require('express')
const app = express()
app.use(express.static(__dirname+'/packaged'))
app.listen(8080)
