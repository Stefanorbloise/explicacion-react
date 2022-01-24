import logo from './media/mundo.png';
import './styles/styles.css';
import pitbull from './media/pitbull.jpg'
import pastor from './media/Cane_da_pastore_tedesco_adulto.jpg'
import pug from './media/pug.jpg'
import borderCollie from './media/border-collie-.jpeg'


function App() {
  return (
    <div className="App">
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
        );
}


function CardRazasPerros({color, nombreRaza, img}){
    return(
        <li className="breedCard">
            <div className={color}>
            <div className="contenedorImagen">
            <img src={img} alt={nombreRaza} />
            </div>
            <span className="breedTitle">{nombreRaza}
            </span>
            <div>
                <ul className="interactionCard">
                    <li>
                        <i className="fas fa-thumbs-up thumbsUp"></i>
                        <span>150</span>
                    </li>
                    <li>                                
                        <i className="fas fa-comments"></i>
                        <span>15</span>
                    </li>
                    <li>                                
                        <i className="fas fa-eye"></i>
                        <span>900</span>
                    </li>
                </ul>
            </div>
        </div>
        </li>
    );
}

/*también se puede con los props, pero así es más chimba*/

export default App;
