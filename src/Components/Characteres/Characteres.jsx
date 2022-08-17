import Character from "../Character/Character";
import "../Characteres/characteres.css"

const Characteres = ({ characteres }) => {
  return (
      <section className="characteresCard">
        {characteres.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </section>
  );
};
export default Characteres;
