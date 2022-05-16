const fs = require("fs");
const express = require("express");
const multer = require("multer");
const OAuth2Data = require("../Credentials").web;
var title, description;
var tags = [];

const { google } = require("googleapis");
const axios = require("axios");

const router = express.Router();
const cors = require('cors');
const isDevelopment = true;
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
if (isDevelopment) {
    router.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
}
function non() {

}


const CLIENT_ID = OAuth2Data.client_id;
const CLIENT_SECRET = OAuth2Data.client_secret;
const REDIRECT_URL = OAuth2Data.redirect_uris;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);
var authed = false;

// If modifying these scopes, delete token.json.
const SCOPES =
    "https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/userinfo.profile";


var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./videos");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

var upload = multer({
    storage: Storage,
}).single("file"); //Field name and max count

router.get("/", isDevelopment ? cors() : nothing(), async (req, res) => {
    if (!authed) {
        // Generate an OAuth URL and redirect there
        var url = await oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: SCOPES,
        });
        console.log(url);
        res.json({ url: url });
    } else {
        var oauth2 = await google.oauth2({
            auth: oAuth2Client,
            version: "v2",
        });
        oauth2.userinfo.get(function (err, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(response.data);
                name = response.data.name;
                pic = response.data.picture;
                res.render("success", {
                    name: response.data.name,
                    pic: response.data.picture,
                    success: false,
                });
            }
        });
    }
});

router.post("/upload", isDevelopment ? cors() : nothing(), (req, res) => {
    let x = 5;
    upload(req, res, function (err) {
        console.log(req.body.description);
        console.log(req.body);
        if (err) {
            console.log(err);
            return res.end("Something went wrong");
        } else {
            console.log(req.file.path);
            title = req.body.title;
            description = req.body.description;
            tags = req.body.tags;
            console.log(title);
            console.log(description);
            console.log(tags);
            const youtube = google.youtube({ version: "v3", auth: oAuth2Client });
            console.log(youtube)
            youtube.videos.insert(
                {
                    resource: {
                        // Video title and description
                        snippet: {
                            title: title,
                            description: description,
                            tags: tags
                        },
                        // I don't want to spam my subscribers
                        status: {
                            privacyStatus: "private",
                        },
                    },
                    // This is for the callback function
                    part: "snippet,status",

                    // Create the readable stream to upload the video
                    media: {
                        body: fs.createReadStream(req.file.path)
                    },
                },
                (err, data) => {
                    if (err) throw err
                    console.log(data)
                    console.log("Done.");
                    fs.unlinkSync(req.file.path);
                    res.render("success", { name: name, pic: pic, success: true });
                }
            );
        }
    });
});

router.get("/logout", isDevelopment ? cors() : nothing(), (req, res) => {
    authed = false;
    res.redirect("http://localhost:3000/corsCreasion/course-4/course-41");
});

router.get("/callback", function (req, res) {
    const code = req.query.code;
    if (code) {
        // Get an access token based on our OAuth code
        oAuth2Client.getToken(code, function (err, tokens) {
            if (err) {
                console.log("Error authenticating");
                console.log(err);
            } else {
                console.log("Successfully authenticated");
                console.log(tokens);
                oAuth2Client.setCredentials(tokens);

                authed = true;
                res.redirect("/google");
            }
        });
    }
});


const apiKey = "AIzaSyD_0TR76vsfUc7LsH5RPi8w2T5EP0WcG6s";
const apiUrl = "https://www.googleapis.com/youtube/v3";
const youtube = google.youtube({

    version: "v3",
    auth: apiKey,
});


router.get("/search", async (req, res, next) => {
    try {
        const searchQuery = req.query.search_query;
        const url = `${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=hi`;

        const response = await axios.get(url);
        const titles = response.data.items.map((item) => item.snippet);

        console.log(titles);
    } catch (err) {
        next(err);
    }
});

router.get("/search-with-googleapis", async (req, res, next) => {
    try {
        const searchQuery = req.query.search_query;
        const response = await youtube.search.list({
            part: "snippet",
            q: searchQuery,
        });

        const titles = response.data.items.map((item) => item.snippet.title);
        res.send(titles);
    } catch (err) {
        next(err);
    }
});



module.exports = router;
