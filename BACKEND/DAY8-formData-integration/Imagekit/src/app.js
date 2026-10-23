import express from "express"
import connectDB from "./Config/db.config.js";
import posteRoutes from "./Routes/poste.route.js"
connectDB()




const app= express()

app.use(express.json())

app.use("/api/post" , posteRoutes)

export default app;