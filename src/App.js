
import './App.css';
import Perfil from './Components/infoPerfil';
import Barra from './Components/navBar';
import General from './Components/infoGeneral';

function App() {
  return (

    // Este es el contenedor de todo el esquema.
    <div className='container0'>

      <section>
        <Barra />
      </section>

      <section className='container1'>
        <Perfil />
        <General />
      </section>

    </div>
  );
}

export default App;
