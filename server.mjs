import express from "express";
import usersRouter from "./routes/Users.mjs"
import connectDB from "./config/db.mjs";
// import cors  from "cors";

connectDB();
const app = express();

app.use(express.json());
// app.use(cors());

app.use(usersRouter);

const PORT = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    return res.status(200).send("This is trang chu");
})


app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
});
