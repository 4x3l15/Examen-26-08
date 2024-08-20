import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [nro, setNro] = useState(0);
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    // Cargar los contactos al cargar la página
    axios.get('http://localhost:3000/contactos')
      .then(response => {
        setContactos(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al cargar los contactos:", error);
      });
  }, []);

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
    <table className='table' border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr className='table-container'>
            <th className='table-Nombre'>Nombre</th>
            <th className='table-Nro'>telefono</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>{contacto.nombre}</td>
              <td>{contacto.nro}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </div>
  )
};

export default App;
