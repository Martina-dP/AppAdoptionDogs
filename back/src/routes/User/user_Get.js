const { Router } = require("express");
const User = require("../../models/User");

const router = Router();

router.get("/", async function( req, res) {
    const users = await User.find({});
    res.json(users);
      
});

module.exports = router;