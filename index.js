const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/joke/random",async(req,res)=>{
    try {
        const respone = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");

        const joke = respone.data.joke;
        
        res.json({
            success: true,
            randomJoke: joke,
        });
        
        console.log(`Random joke generated: ${randomJokeUrl}`);
    } catch (error) {
        console.error("Error generating random joke:", error.message);
        res.status(500).json({ success: false, error: "Failed to generate random joke." });
    }
})

app.listen(3001,()=>{
    console.log("Server is running on http://localhost:3001");
})