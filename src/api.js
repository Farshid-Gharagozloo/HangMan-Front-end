import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.interceptors.response.use((response) => response.data);

export const getWords = () => axios.get(`/words`);

export const getRandomWord = () =>
  axios.get(`/random`).then((data) => {
    console.log(data);
    return data;
  });


export const addWord = (newword, uploadImg) => 
  axios.post("/words", newword, uploadImg);
