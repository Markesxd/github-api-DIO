import style from './style.module.scss';
import {useUserContext} from '../../context/userContext.js';

const RepoCard = () => {

  const {repos} = useUserContext();

  const handleRepos = () => {
      return repos.map((repo, i) => {
        return(
          <div key={i} className={style.container}>
            <h4>{repo.name}</h4>
            <span>full name:</span>
            <a href={repo.url}>{repo.fullName}</a>
          </div>
        )
      })
  }

  return (
    {handleRepos()}
  )
}

export {RepoCard};
