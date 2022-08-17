const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div style={{display:"flex", justifyContent:"center", margin:"30px"}}>
      <div style={{paddingRight:"10px"}}>{prev ? <button onClick={handlePrevious}>Atrás</button> : null}</div>
      <div>{next ? <button onClick={handleNext}>Siguiente</button> : null}</div>
    </div>
  );
};
export default Pagination;
