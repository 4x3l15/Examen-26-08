import { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [nro, setNro] = useState(0);
  const [contactos, setContactos] = useState([])

  const actualizarNombre = (even) => {
    setNombre(even.target.value);
    console.log("nombre:",nombre);
  };

  const actualizarNro = (even) => {
    setNro(even.target.value);
    console.log("numero",nro);
  };

  const agregarContacto = () => {
    const nuevoContacto = { nombre, nro };
    setContactos([...contactos, nuevoContacto]);
    console.log("nuevoContacto:",nuevoContacto);
  };

  return (
   <div>
    <h1>Agenda Telefonica</h1>
    <div className='container-input'>
    <input onChange={actualizarNombre} type="text" placeholder="Nombre y Apellido"/>
    <input onChange={actualizarNro} type="number" placeholder="Telefono"/>
   </div>
   <button onClick={agregarContacto} className='Agregar'>Agregar</button>
   </div>
  )
};

export default App;
