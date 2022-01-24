import CardRazasPerros from "../components/cardRazasPerros";
import logo from '../media/mundo.png';
import '../styles/styles.css';
import pitbull from '../media/pitbull.jpg';
import pastor from '../media/Cane_da_pastore_tedesco_adulto.jpg';
import pug from '../media/pug.jpg';
import borderCollie from '../media/border-collie-.jpeg';


function Index(){
    return(
        <div>
        <body>
            <header>
                <ul className="navbar">
                    <li>
                        <img src={logo} alt="imagen" className="logo" />
                    </li>
                    <li>
                        <button className="button mainbutton">Nuevo post</button>
                    </li>
                    <li><button className="button secondarybutton">Login</button></li>
                    <li>
                        <div className="buscar">                 
                            <input placeholder="buscar una raza" />
                            <i className="fas fa-search lupa"></i>
                        </div>
                        </li>
                    <li><button className="button mainbutton">Registro</button></li>
                </ul>
            </header>
            <main>
                <section>
                    <h1>Razas de perros</h1>
                    <ul className="breedCardContainer">
                        <CardRazasPerros nombreRaza="Pitbull" img={pitbull} color="backgroundVerde"/>
                        <CardRazasPerros nombreRaza="Pug" img={pug} color="backgroundVerde"/>
                        <CardRazasPerros nombreRaza="BorderCollie" img={borderCollie} color="backgroundRojo"/>
                        <CardRazasPerros nombreRaza="Pastor Alemán" img={pastor} color="backgroundRojo"/>
                    </ul>
                </section>
                <section></section>
            </main>
            <footer>
            </footer>
        </body>
        </div>
        )
}

export default Index;