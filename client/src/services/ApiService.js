import axios from 'axios';

const api = () => { 

  const searchUser = (user) => {
    return axios.get(`http://localhost:3001/search?user=${user}`)
  }

  const starRepo = (repoName, owner) => {
    let req = {
      owner, repoName
    }
    const config = { headers: {'Content-Type': 'application/json'} };
    return axios.put(`http://localhost:3001/star`, req, config );
  }

  const deleteStar = (repoName, owner) => {
    let req = {
      owner, repoName
    }
    const config = { headers: {'Content-Type': 'application/json'} };
    return axios.post(`http://localhost:3001/delete-star`, req, config );
  }

  return {
    searchUser,
    starRepo,
    deleteStar
  };
}


export const ApiService = api();



