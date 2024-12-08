import { Router } from "express";
import { Users}  from "../model/Users.mjs";

const router = Router();

router.get("/api/users", async (req, res) => {
    try {
      const users = await Users.find(); // Lấy tất cả người dùng từ MongoDB
      return res.status(200).json(users); // Gửi dữ liệu dưới dạng JSON
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

router.post("/api/users",(req,res)=>{
    const body = req.body;
    console.log(body);
    const newUser = new Users(body);
    try {
        const savedUser = newUser.save();
        return res.send(savedUser);}
        catch(err){
            console.log(err);
            return res.sendStatus(400);
        }
})

export default router;