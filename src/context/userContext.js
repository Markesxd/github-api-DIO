import {createContext, useState, useContext} from 'react';
import api from '../services/api.js'

const userContext = createContext();

const defaultUser = {
  name: 'Rafael Campos',
  login: 'Markesxd',
  url: "https://github.com/Markesxd",
  company: '',
  location: 'São João del Rei - Brasil',
  blog: '',
  followers: 2,
  following: 1,
  avatar: 'https://avatars.githubusercontent.com/u/78707583?v=4',
  gists: 0,
  repos: 11
}

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(defaultUser);
  const [repos, setRepos] = useState([{name: 'repo', fullName: 'repo', url: 'repo'}]);

  function getUser(username){
    if(!username) return;
    api.get(`/users/${username}`)
    .then(({data}) => {
      const newUser = {
        name: data.name,
        login: data.login,
        url: data.html_url,
        company: data.company,
        location: data.location,
        blog: data.blog,
        followers: data.followers,
        following: data.following,
        avatar: data.avatar_url,
        gists: data.public_gists,
        repos: data.public_repos
      };
      setUser(newUser);
    });
    getRepos(username);
  }

  function getRepos(username){
    api.get(`/users/${username}/repos`)
    .then(({data}) => {
      const newRepos = data.map(repo => {return {
        name: repo.name,
        fullName: repo.full_name,
        url: repo.html_url
      }});
      setRepos(newRepos);
    });
  }

  function getStarred(username){
    api.get(`users/${username}/starred`)
    .then(({data}) => {
      const newStared = data.map(repo => {return {
        name: repo.name,
        fullName: repo.full_name,
        url: repo.html_url
      }});
      setRepos(newStared);
    });
  }

  return (
    <userContext.Provider value={{
      user,
      getUser,
      repos,
      getRepos,
      getStarred
    }}>
    {children}
    </userContext.Provider>
  )
}

const useUserContext = () => useContext(userContext);

export {useUserContext};

export default UserContextProvider;
