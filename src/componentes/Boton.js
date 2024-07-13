import "../estilos/Boton.css";

const Boton = (props) => {
  console.log("props");
  console.log("props.type");
  return (
    <input type={props.type} onClick={() => props.resetValores()} className="boton" value={props.children} />
  )
}

export default Boton;