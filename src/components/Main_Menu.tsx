import { Link } from "react-router-dom";
import "./Main_Menu.css";

const Main_Menu = () => {
  return (
    <div id='menu-container'>
      <Link to={"/character_menu"}>New Game</Link>
      <Link to={"/load_menu"}>Load Game</Link> // TODO add load game menu
    </div>
  );
};

export default Main_Menu;
