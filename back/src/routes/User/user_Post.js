const { Router } = require("express");
const User = require("../../models/User");
const bcryptjs = require("bcryptjs");
const { generToken } = require("../../utils/jwt");

const router = Router();

router.post("/", async function( req, res) {
    const {
        name,
        lastName,
        mail,
        password,
        phone  } = req.body;

    let passwordHash = await bcryptjs.hash(password, 8);

    const validateMail = await User.findOne({mail})
    if(validateMail) return res.status(400).json({mensaje: "mail ya registrado"})

    try {
        
        const userCreated = await User.create({
                mail: mail,
                name: name,
                lastName: lastName,
                phone: phone,
                password: passwordHash
        })

        const token = await generToken( userCreated._id, userCreated.name )

            res.json({userCreated, token});
            console.log("user", userCreated) 

    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;