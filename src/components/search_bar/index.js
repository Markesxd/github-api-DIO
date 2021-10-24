import style from './style.module.scss';

const SearchBar = () => {

  const handleEnter = (e) => {
    if(e.code !== 'Enter') return;
  }

  return(
    <input onKeyPress={handleEnter} className={style.searchbar} type='text'/>
  )
};

export {SearchBar};
