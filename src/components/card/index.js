import style from './style.module.scss';

const Card = () => {
 return(
   <div className={style.container}>
    <span className={style.img} />
    <div className={style.info}>
      <h2>Rafael Campos</h2>
      <h3>Username: Markesxd</h3>
      <h3>Company: @currentlyunemployed</h3>
      <h3>Location: Brazil</h3>
      <h3>Blog: www.notexistent.nay</h3>
    </div>
   </div>
 )
}

export {Card}
