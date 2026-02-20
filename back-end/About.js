const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
    res.json({
        name: "Lia Jang",
        bio: "I am a senior at NYU studying Computer Science and Economics. I am interested in software engineering and product management.",
        imageUrl: "/IMG_2505.jpg"
    });
});

module.exports = router;
