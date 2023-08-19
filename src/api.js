import axios from "axios";

// axios.defaults.baseURL = "https://project-2-api.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:3100";
axios.defaults.baseURL = "http://localhost:8080";
axios.interceptors.response.use((response) => response.data);

export const getWords = () => axios.get(`/words`);
// export const getRandomWord = () => axios.get(`/random`);
export const getRandomWord = () =>
  axios.get(`/random`).then((data) => {

    // const value = data.data;
    // const results = data.results.map((item) => item.name);
    // const randomIndex = Math.floor(Math.random() * results.length);
    // const value = results[randomIndex];
    console.log(data);
    return data;
  });


  export const addWord = (newword) => 
    axios.post("/words", newword).then((response) => {
      
    })
