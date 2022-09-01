const Card = ({imagen, nombre, correo, celular}) => {

  return (
    <>
    <div className="bg-white px-10 py-8 h-auto rounded-3xl m-auto w-96 mb-10 mt-10 text-center border-white bg-gradient-to-r from-cyan-500 to-blue-500 border-4">
        <img src={imagen} className="bg-slate-600 h-20 w-20 rounded-full text-center m-auto -mt-10" alt="" />
        <h2 className="font-bold text-white">👱  {nombre}</h2>
        <h3>📧 {correo}</h3>
        <h3>📞 {celular}</h3>
      </div>
    </>
  )
}

export default Card