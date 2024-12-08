import express from "express";

// import cors  from "cors";

const app = express();

// app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    return res.status(200).send("This is trang chu");
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
});
