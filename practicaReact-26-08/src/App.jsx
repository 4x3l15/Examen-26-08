import { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [nro, setNro] = useState('');
  const [contactos, setContactos] = useState([]);
  const [nuevoId, setNuevoId] = useState(1);
  const [contactoEditado, setContactoEditado] = useState(null);

  const actualizarNombre = (even) => {
    setNombre(even.target.value);
    console.log("nombre:", nombre);
  };

  const actualizarNro = (even) => {
    setNro(even.target.value);
    console.log("numero", nro);
  };

  const agregarContacto = () => {
    const nuevoContacto = { id: nuevoId, nombre, nro };
    setContactos([...contactos, nuevoContacto]);
    setNuevoId(nuevoId + 1);
    setNombre('');
    setNro('');
    console.log("nuevoContacto:", nuevoContacto);
  };

  const eliminarContacto = (id) => {
    setContactos(contactos.filter(contacto => contacto.id !== id));
  };

  const iniciarEdicion = (contacto) => {
    setNombre(contacto.nombre);
    setNro(contacto.nro);
    setContactoEditado(contacto.id);
  };

  const actualizarContacto = () => {
    const contactosActualizados = contactos.map(contacto =>
      contacto.id === contactoEditado
        ? { ...contacto, nombre, nro }
        : contacto
    );
    setContactos(contactosActualizados);
    setContactoEditado(null);
    setNombre('');
    setNro('');
  };

  return (
    <div>
      <h1>Agenda Telefonica</h1>
      <div className='container-input'>
        <input onChange={actualizarNombre} type="text" placeholder="Nombre y Apellido" value={nombre}/>
        <input onChange={actualizarNro} type="number" placeholder="Telefono" value={nro}/>
      </div>
      <button onClick={contactoEditado ? actualizarContacto : agregarContacto} className={contactoEditado ? 'Actualizar' : 'Agregar'} >
        {contactoEditado ? 'Actualizar' : 'Agregar'}
      </button>
      <table className='table' border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr className='table-container'>
            <th className='table-Nombre'>Nombre</th>
            <th className='table-Nro'>Telefono</th>
            <th className='table-Acciones'></th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <tr key={contacto.id}>
              <td>{contacto.nombre}</td>
              <td>{contacto.nro}</td>
              <td>
                <button onClick={() => iniciarEdicion(contacto)} className='Editar'>
                  Editar
                </button>
                <button onClick={() => eliminarContacto(contacto.id)} className='Eliminar'>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
