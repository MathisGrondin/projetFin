import { Link } from "react-router-dom";
import CarteConsoles from "./carteConsoles";
import { useEffect, useRef, useState } from "react";

function Consoles() {

    const [items, setItems] = useState([]);
    const [recherche, setRecherche] = useState('');
    const [nbItems, setNbItems] = useState(25);
    
    const handleChange = (event) => {
        // Enregistre la valeur de la recherche
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

    useEffect(() => {
        fetch('/bd/consoles.json')
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);
    
    let nbItemsTotal = items.length;
    
    
    return (
        <div className="container-fluid p-0 m-0 bg-black text-white">
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
                <div className="col-xl-4 col-4 m-0 p-0 recherche bg-secondary">
                    <div className="col-xl-12 p-0 m-0 bouton">
                        <img
                        src="./img/home2/icones/rechercher.png"
                        alt='Icone de recherche'
                        width="15%"
                        className="my-1"
                        />
                        <input type="text" value={recherche} onChange={handleChange} class="form-control inRecherche" id="rechercheConsoles" placeholder="Recherchez ici"></input>
                    </div>
                </div>
                <div className="col-xl-4 col-4 m-0 p-0">
                    <Link to="/liste_jeux" style={{ textDecoration: 'none'}}>
                        <button className="col-xl-4 col-4 btn btn-secondary boutonMenu">
                            <div className="col-xl-12 bouton">
                                <img
                                src="./img/home2/icones/jeux.png"
                                className="mx-2"
                                alt='Icone liste jeux'
                                width="15%"
                                />
                                Liste des jeux
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row px-0 mx-0 py-3 m-0">
                <div className="offset col-xl-4 m-0 p-0"></div>
                <div className="col-xl-4 m-0 p-0 text-center">
                    <h6 className="fw-bold"> -&gt; Affichage de {nbItems} items sur {nbItemsTotal} &lt;- </h6>
                </div>
                <div className="offset col-xl-4 m-0 p-0"></div>
            </div>

            {/* SECTTION CARTES */}
            <div className="row row-cols-1 row-cols-md-5 g-4 m-0">
                {items.map((item, index) => (
                    (item.Nom.toLowerCase().includes(recherche.toLowerCase()))
                    &&
                    (
                        <CarteConsoles
                        nom={item.Nom}
                        Image={item.Image}
                        Fabricant={item.Fabricant}
                        Generation={item.Generation}
                        dateSortie={item.DateSortie}
                        type={item.Type}
                        Processeur={item.Processeur}
                        ProcesseurGraph={item.ProcesseurGraph}
                        Stockage={item.Stockage}
                        Affichage={item.Affichage}
                        Batterie={item.Batterie}
                        Logiciel={item.Logiciel}
                        carac1={item.Caracteristiques[0]}
                        carac2={item.Caracteristiques[1]}
                        carac3={item.Caracteristiques[2]}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

export default Consoles;