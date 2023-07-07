import './HolaMundo.css'
const HolaMundo = ({nombre, apellido}) => {
  return (
    <>
        <h2 className='saludo' style={{fontSize:'50px', border:'solid black'}}>Hola {nombre} {apellido}</h2>
        <p>Hola mundo</p>
    </>
  )
}
export default HolaMundo

// const HolaMundo = (props) => {
//     return (
//       <h2>Hola {props.nombre} {props.apellido}</h2>
//     )
//   }
//   export default HolaMundo