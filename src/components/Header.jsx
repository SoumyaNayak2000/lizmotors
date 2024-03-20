import css from "../styles/header.module.css";
import Icon from "./Icon";

const Header = () => {
  return (
    <div className={css.container}>
      <Icon />
      {/* <IconButton name="menu" onClick={() => props.onMenuClick()} /> */}
      <div className={css.title}>MindMap</div>
    </div>
  );
};

export default Header;
