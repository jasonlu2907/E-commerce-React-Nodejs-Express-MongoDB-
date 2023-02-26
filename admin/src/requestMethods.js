import axios from 'axios';

//OLD LOCAL URL
const URL = `http://localhost:4000/api/v1`;
// const URL = `https://siteecommerceapi.herokuapp.com/api/v1`;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  .currentUser.accessToken;
console.log(TOKEN);

// NON-USER searching
export const publicRequest = axios.create({
  baseURL: URL,
});

// USER searching
export const userRequest = axios.create({
  baseURL: URL,
  headers: { token: `Bearer ${TOKEN}` },
});
