import StatPicker from "./StatPicker";

const Character_Menu = () => {
  return (
    <form>
      <section>
        <h2>Choose a Class</h2>
        <select>
          //todo: add actual class options
          <option value={"Cleric"}>Cleric</option>
          <option value={"Cleric"}>Cleric2</option>
          <option value={"Cleric"}>Cleric3</option>
          <option value={"Cleric"}>Cleric4</option>
        </select>
      </section>
      <section>
        <h2>Choose your Stats</h2>
        <StatPicker />
      </section>
    </form>
  );
};
export default Character_Menu;
