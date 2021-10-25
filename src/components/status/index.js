import style from './style.module.scss';
import {useUserContext} from '../../context/userContext.js';

const Status = () => {

  const {user} = useUserContext();

  return(
    <div className={style.container}>
      <div>
        <span>Followers</span>
        <span>{user.followers}</span>
      </div>
      <div>
        <span>Following</span>
        <span>{user.following}</span>
      </div>
      <div>
        <span>Gists</span>
        <span>{user.gists}</span>
      </div>
      <div>
        <span>Repos</span>
        <span>{user.repos}</span>
      </div>
    </div>
  )
}

export {Status}
