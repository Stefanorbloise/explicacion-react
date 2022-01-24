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
                <li className="breedCard">
                    <div className="contenedorImagen">
                       <img src={pitbull} alt="imagenpitvbulll" />
                    </div>
                    <span className="breedTitle">
                        Pitbull
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
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={pastor} alt="imagenpa" />
                     </div>
                     <span className="breedTitle">
                         Pastor Alemán
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
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={pug} alt="imagenpug" />
                     </div>
                     <span className="breedTitle">
                        Pug
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
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="imagenbroder" />
                     </div>
                     <span className="breedTitle">
                        Border Collie
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
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
</body>
    </div>
  );
}

export default App;
