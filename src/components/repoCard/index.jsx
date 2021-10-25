import {useEffect} from 'react';
import style from './style.module.scss';
import {useUserContext} from '../../context/userContext.js';

const RepoCard = () => {

  const {repos} = useUserContext();
  const repoCards = repos.map((repo, i) => {
    return(
      <div key={i} className={style.card}>
        <h4>{repo.name}</h4>
        <span>full name:</span>
        <a href={repo.url}>{repo.fullName}</a>
      </div>
    )
  })

  return (
    <div className={style.container}>{repoCards}</div>
  )
}

export {RepoCard};
