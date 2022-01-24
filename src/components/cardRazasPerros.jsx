import { Link } from "react-router-dom";

function CardRazasPerros({color, nombreRaza, img}){
    return(
        <li className="breedCard">
            <div className={color}>
            <Link to="/pug">
            <div className="contenedorImagen">
            <img src={img} alt={nombreRaza} />
            </div>
            </Link>
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

export default CardRazasPerros;