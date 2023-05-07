import { Link } from "react-router-dom";
import CarteJeux from "./carteJeux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

function ListeJeux() {
        
    const [items, setItems] = useState([]);
    const nbItemsTotal = items.length;

    const [nbItems, setNbItems] = useState(25);

    useEffect(() => {
      fetch('/bd/jeux.json')
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);

    const [recherche, setRecherche] = useState('');
    const lienSite = items.Site;
    const boutLien = <Button variant="primary" href={lienSite}>Site officiel</Button>;
    
    const boutonSite = () => {
        if (lienSite === "") {
            boutLien.disabeld = true;
        }
        else {
            boutLien.disabeld = false;
        }
    }


    const handleChange = (event) => {
        setRecherche(event.target.value);

        // Compte le nombre d'items affichés
        let nombre = 0;
        items.forEach((item, index) => {
            if(item.Nom.toLowerCase().includes(event.target.value.toLowerCase())) {
                nombre++;
                setNbItems((document.querySelectorAll('.card').length));
            }
            setNbItems(nombre);
        }
        )
    };

    return (
        <div className="container-fluid p-0 m-0">

            {/* MENU BOUTONS */}
            <div className="row px-0 mx-0 py-0 my-0 boutons">
                <div className="col-xl-4 col-4 m-0 p-0">
                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <button className="btn btn-secondary boutonMenu">
                            <div className="col-xl-12 bouton">
                                <img
                                src="./img/home2/icones/accueil.png"
                                alt='Accueil'
                                width="15%"
                                />
                                Accueil
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="col-xl-4 col-4 m-0 p-0">
                    <Link to="/liste_consoles" style={{ textDecoration: 'none'}}>
                        <button className="col-xl-4 col-4 btn btn-secondary boutonMenu">
                        <div className="col-xl-12 bouton">
                                <img
                                src="./img/home2/icones/consoles.png"
                                alt='icone liste des consoles'
                                width="15%"
                                />
                                Liste des consoles
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="col-xl-4 col-4 m-0 p-0 recherche bg-secondary">
                    <div className="col-xl-12 p-0 m-0 bouton">
                        <img
                        src="./img/home2/icones/rechercher.png"
                        alt='Icone de recherche'
                        width="15%"
                        className="my-1"
                        />
                        <input type="texte" value={recherche} onChange={handleChange} class="form-control inRecherche" id="rechercheJeux" placeholder="Recherchez ici"></input>
                    </div>
                </div>
            </div>
            <div className="row px-0 mx-0 py-3 my-0">
                <div className="col-xl-12 col-12 m-0 p-0 text-center">
                    {/* <span className="texteRecherche">Nombre de jeux trouvés : {nbItems} sur {items.length}</span> */}
                    <h6 className="fw-bold"> -&gt; Affichage de {nbItems} items sur {items.length} &lt;- </h6>

                </div>
            </div>

            {/* SECTTION CARTES */}
            <div className="row row-cols-1 row-cols-md-5 g-4 m-0">
                {items.map((item) => (
                    (item.Nom.toLowerCase().includes(recherche.toLowerCase()))
                    &&
                    (
                        <CarteJeux
                        id={item.id}
                        titre={item.Nom}
                        Image={item.Image}
                        dev={item.Dev}
                        Realisateur={item.Realisateur}
                        Compositeur={item.Compositeur}
                        Genre={item.Genre}
                        DateSortie={item.DateSortie}
                        Modes={item.Modes}
                        Plateformes={item.Plateformes}
                        Langue={item.Langue}
                        Evaluation={item.Evaluation}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

export default ListeJeux;