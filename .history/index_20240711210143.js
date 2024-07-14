const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use()
app.use('*' , (req , res , next)=> next(new appError('route not found ${req.originalUrl}'),404) )

app.use( globalError) //middleware of error

//handle error outside express
process.on('unhandledRejection' , (err , promise)=> console.log(`Error: ${err.message}`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))