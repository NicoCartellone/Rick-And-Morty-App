import "../Character/character.css"

const Character = ({character}) => {
  return (
    <div className="characterCard">
      <img className="characterIMG" src={character.image}></img>
      <h3 className="characterName">{character.name}</h3>
    </div>
  )
}
export default Character