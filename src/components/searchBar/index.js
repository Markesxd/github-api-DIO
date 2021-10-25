import style from './style.module.scss';
import {useUserContext} from '../../context/userContext.js';

const SearchBar = () => {

  const {getUser} = useUserContext();

  const handleEnter = (e) => {
    if(e.code !== 'Enter') return;
    getUser(e.target.value);
  }

  return(
    <input onKeyPress={handleEnter} className={style.searchbar} type='text'/>
  )
};

export {SearchBar};
