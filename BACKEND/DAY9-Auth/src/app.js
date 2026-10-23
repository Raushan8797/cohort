import express from 'express'
import AuthRoutes from "./router/auth.register.js"

const app = express()
app.use(express.json())

app.use("/API" , AuthRoutes)



export default app;