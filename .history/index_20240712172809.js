import express, { json } from 'express'
import { default as userRouter } from './modules/users/user.routes.js'
import { globalError } from './middlewares/globalError.js'
import { appError } from './utilities/appError.js'
const app = express()
const port = 3000

app.use(json())
app.use('/auth' , userRouter)

app.use('*' , (req , res , next)=> next(new appError('route not found ${req.originalUrl}'),404) )

app.use( globalError) //middleware of error

//handle error outside express
process.on('unhandledRejection' , (err , promise)=> console.log(`Error: ${err.message}`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))