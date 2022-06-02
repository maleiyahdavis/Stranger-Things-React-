import axios from 'axios';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT"

export async function getPosts() {
try{
    fetch(`${BASE_URL}/posts`).then(response => response.json())
    .then(result => {
      return result;
    })
}catch(err){
    console.error;
}
}
export async function registerUser(username, password){
  try{
    const {data} = await axios.post(`${BASE_URL}/users/register`,{
    username: username,
    password: password 
    });
    return data; 
  }catch(error){
    throw error;
  }
}
export async function loginUser(username, password){
  try{
    const {data} = await axios.post(`${BASE_URL}/users/login`,{
    username: username,
    password: password 
    });
    return data; 
  }catch(error){
    throw error; 
  }}
  export async function createPost (title, description, user, token){
    try{
      const {data} = await axios.post(`${BASE_URL}/posts`, {
      title: title,
      description: description,
      author: user
      },{
        headers: {
          "auth-token" : token
        }
      });
      return data; 
    }catch(error){
      throw error;
    }
}