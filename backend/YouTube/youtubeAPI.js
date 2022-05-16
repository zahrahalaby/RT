import axios from "axios";
const KEY = "AIzaSyAOJT5id5SjgIzLZSUjouNDPSUuWMfk0xA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 1,
        key: KEY
    },
    headers: {}
});