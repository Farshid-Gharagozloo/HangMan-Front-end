import axios from "axios";

axios.defaults.baseURL = "https://hangman-images-f201200758b8.herokuapp.com";
axios.interceptors.response.use((response) => response.data);

export const getWords = () => axios.get(`/words`);

export const getRandomWord = () =>
  axios.get(`/random`).then((data) => {
    console.log(data);
    return data;
  });


export const addWord = (newword, uploadImg) => 
  axios.post("/words", newword, uploadImg);
