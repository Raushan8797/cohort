import express from "express";
import urlRoutes from "../routes/url.routes.js";
import urlModel from "../module/Url.model.js";

const app = express();

app.use(express.json());

app.use("/API/url", urlRoutes);

app.get("/:ShortCode", async(req, res) => {
    const {ShortCode} = req.params

    const url = await urlModel.findOne({
        ShortCode:ShortCode
    })
    if(!url){
        return res.status(404).json({
            error:"URL not found"
        })
    }

    res.redirect(302, url.originalUrl);

    await urlModel.findOneAndUpdate(
        {ShortCode:ShortCode},
        {$inc:{Clicks:1}}
    )
});
 
export default app;
