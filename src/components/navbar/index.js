import style from './style.module.scss';

const Navbar = () => {
  return (
    <div className={style.container}>
      <button>Repositories</button>
      <button>Starred</button>
    </div>
  )
};

export {Navbar};
