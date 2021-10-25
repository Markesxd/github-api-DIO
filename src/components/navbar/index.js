import style from './style.module.scss';
import {useUserContext} from '../../context/userContext.js';

const Navbar = () => {

  const {getRepos, getStarred, user} = useUserContext();

  const username = user.login;

  return (
    <div className={style.container}>
      <button onClick={() => {getRepos(username)}}>Repositories</button>
      <button onClick={() => {getStarred(username)}}>Starred</button>
    </div>
  )
};

export {Navbar};
