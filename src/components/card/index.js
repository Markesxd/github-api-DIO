import style from './style.module.scss';
import {Status} from '..';
import {useUserContext} from '../../context/userContext.js';

const Card = () => {

  const {user} = useUserContext();

 return(
   <div className={style.container}>
    <img className={style.img} src={user.avatar} alt="Profile"/>
    <div className={style.info}>
      <h2>{user.name}</h2>
      <h3><strong>Username:</strong> <a href={user.url} target="_blank">{user.login}</a></h3>
      <h3><strong>Company:</strong> {user.company}</h3>
      <h3><strong>Location:</strong> {user.location}</h3>
      <h3><strong>Blog:</strong> <a href={user.blog}>{user.blog}</a></h3>
      <Status/>
    </div>
   </div>
 )
}

export {Card}
