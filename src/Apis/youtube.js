import axios from "axios";

const KEY = "AIzaSyB3cP1kdYqfrtlAnhp_B478cYqOnlZzNKE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
