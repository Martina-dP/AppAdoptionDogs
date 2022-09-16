const { Router } = require("express");
const Dog = require("../../models/Dog");

const router = Router();

router.get("/", async function( req, res) {
    const dogs = await Dog.find({
      where: {
        condition: false
      },
    });
      res.json(dogs);
});

module.exports = router;