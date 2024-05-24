const express = require('express')
const connectToDB = require('./connectToDB')
const cookieParser = require('cookie-parser')
const communityRoutes = require('./src/Routes/communityRoutes')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 8003

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your client URL
  credentials: true
}))
connectToDB()

app.use(cookieParser())

app.use('/community', communityRoutes)

app.listen(port, '0.0.0.0', () => {
  console.log(`Community service is running on port ${port}!`)
})
