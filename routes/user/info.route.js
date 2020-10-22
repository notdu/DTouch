const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {


    res.send({ a: "hehehehe" })
});

router.post("/", async (req, res) => {
    const id = req.body.id;
    if (id) {
        res.send({
            id,
            name: "Huynh Huu Du",
            list: [{
                name: "facebook",
                link: "facebook.com/huudutg"
            }, {
                name: "mail",
                link: "huudutg@gmail.com"
            }, {
                name: "sdt",
                link: "0984560752"
            }
            ]

        })
    }
    else {
        res.sendStatus(500);

    }
});

module.exports = router;
