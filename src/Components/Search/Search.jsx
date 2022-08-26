
const Search = ({ nameCharacter, setNameCharacter }) => {

  return (
    <form onSubmit={ev => {ev.preventDefault();}}>
        <input
            style={{width:"300px", height:"30px", margin:"5px"}}
            type="text"
            placeholder="Nombre del personaje"
            autoComplete="off"
            value={nameCharacter}
            onChange={ev => setNameCharacter(ev.target.value)}
        ></input>
        <button type="submit">Buscar</button>
    </form>
  )
}
export default Search