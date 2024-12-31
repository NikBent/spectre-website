const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy Data
let aboutUs = {
    motto: ["We are United", "We are Stunt performers", "We are Family"],
    fullDescription: `
        Spectre adalah Unit Kegiatan Mahasiswa (UKM) yang berfokus di bidang stunt action untuk dunia perfilman. 
        Tujuan dari UKM ini adalah memberikan dan mengasah ilmu yang dibutuhkan oleh para anggota untuk berperforma 
        di dunia perfilman dengan tingkat standar profesional.
    `
};

let achievements = [
    {
        title: "The Raid",
        description: "Collaborated as stunt crew for the globally acclaimed movie The Raid.",
        link: "https://www.imdb.com/title/tt1899353/",
        image: "/TheRaid.jpg"
    },
    {
        title: "Gundala",
        description: "Played a pivotal role in crafting stunt sequences for Gundala.",
        link: "https://www.imdb.com/title/tt8237172/",
        image: "/Gundala.jpg"
    },
    {
        title: "The Night Comes for Us",
        description: "Part of the dynamic action team for The Night Comes for Us.",
        link: "https://www.imdb.com/title/tt6116856/",
        image: "/TheNight.jpg"
    }
];

let instagramPosts = [
    "https://www.instagram.com/p/C57MT3LS7Tn/",
    "https://www.instagram.com/p/C7RSAWEyfTs/",
    "https://www.instagram.com/p/C6A4_N7rP5o/"
];

// Routes
app.get("/api/about-us", (req, res) => {
    res.json(aboutUs);
});

app.get("/api/achievements", (req, res) => {
    res.json(achievements);
});

app.get("/api/instagram-posts", (req, res) => {
    res.json(instagramPosts);
});

app.post("/api/instagram-posts", (req, res) => {
    const { link } = req.body;
    if (link) {
        instagramPosts.push(link);
        res.status(201).json({ message: "Instagram post added successfully!" });
    } else {
        res.status(400).json({ message: "Invalid data." });
    }
});

app.post("/api/join-us", (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        // Here you can process the data further, like saving to a database.
        res.status(201).json({ message: "Request to join received successfully!" });
    } else {
        res.status(400).json({ message: "Name and email are required." });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

