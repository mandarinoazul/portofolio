import fotoperfil from '../Anexos/fotodeperfil.jpg';
import '../App.css';

function Perfil() {
    return (
        <section className='contenedorPerfil'>
            <img src={fotoperfil} alt='Mi foto de perfil' className='profilepic' />
            <p>Desarrollador web & DesktopApp</p>
        </section>

    );
}

export default Perfil;