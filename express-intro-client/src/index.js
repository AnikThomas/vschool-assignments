import axios from "axios";

axios.get("/cats").then(response =>{
    console.log(response.data)
})