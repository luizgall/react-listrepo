import axios from 'axios';

const api = () => { 

  const searchUser = (user) => {

    return axios.get(`http://localhost:3001/search?user=${user}`)
  
  }

  return {
    searchUser
  };
}


export const ApiService = api();



