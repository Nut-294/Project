import User from '@/models/user'
import bcrypt from 'bcryptjs'

//สร้าง
export const create = async (req, res) => {
    try {
        const { name, email, password } = req.body
        var user = await User.findOne({email})

        if(user){
            return res.send('User Already exits!')

        }
        user = await new User({name, email, password})
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()
        res.send("Register Success")
    } catch (err) {
        res.status(400).send('Server Create Error!!') 
    }
}
//เข้าถึงอ่าน
export const list = async (req, res) => {
    try {
        const listUser = await User.find({}).exec()
        res.send(listUser)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server List Error!!!')
    }
}
