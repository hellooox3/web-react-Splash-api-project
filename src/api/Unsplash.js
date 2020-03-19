import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID lK8aSfrzDW48V3_ujW_tD_HIt2vyOWGTceYRD1x3d6Q"
  }
});
