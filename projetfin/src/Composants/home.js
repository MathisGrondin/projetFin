import '../index.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';

function Home() {

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [courriel, setCourriel] = useState('');
    const [boxCourriel, setBoxCourriel] = useState([]);
    const mailGood = document.querySelector('#toastGood');
    const mailBad = document.querySelector('#toastBad');

    // Si une adresse courriel est entrée pour la newsletter, on vérifie si elle est valide
    const handleChange = (event) => {
        // Stockage du courriel dans une variable
        setCourriel(event.target.value);

        // Stockage de l'input dans une variable
        setBoxCourriel(event.target);

        if(re.test(courriel)) {
            // Si elle correspond à l'expression régulière, on change la couleur de la boîte de courriel
            event.target.style.backgroundColor = "lightgreen";
            event.target.style.border = "2px solid green";
        }
        else{
            if(event.target.value === ''){
                // Si la boîte est vide, on remets la couleur par défaut
                event.target.style.backgroundColor = "white";
                event.target.style.border = "none";

            }
            else{
                // Sinon, on change la couleur de la boîte de courriel en rouge
                event.target.style.backgroundColor = "rgb(255, 77, 77)";
                event.target.style.border = "1px solid red";
            }
        } 
    };

    // Si le bouton est cliqué, on vérifie si l'adresse courriel est valide
    const handleBtnClick = (event) => {
        if(re.test(courriel)) {
            // alert("Merci beaucoup!  Votre courriel a bien été enregistré.");
            boxCourriel.style.border = "1px solid black";
            setCourriel('');
            document.getElementById('toastGood').setAttribute('class', 'toast show');
            document.getElementById('toastBad').setAttribute('class', 'toast hide');
        }
        else{
            // alert("Impossible d'enregistrer votre courriel.\nVeuillez vérifier que vous avez bien entré un courriel valide.");
            setCourriel('');
            boxCourriel.backgroundColor = "white";
            boxCourriel.style.border = "none";
            document.getElementById('toastGood').setAttribute('class', 'toast hide');
            document.getElementById('toastBad').setAttribute('class', 'toast show');
        }
    };

        

    return (
        <div className="container-fluid px-0">
            {/* BANNIÈRE */}
            <div className="row px-0 mx-0" id="banniere">
                <img 
                src="./img/home2/BanniereSiteWeb.png"
                alt="Bannière du site web"
                />
            </div>

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
                                alt='Accueil'
                                width="15%"
                                />
                                Liste des consoles
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="col-xl-4 col-4 m-0 p-0">
                    <Link to="/liste_jeux" style={{ textDecoration: 'none'}}>
                        <button className="col-xl-4 col-4 btn btn-secondary boutonMenu">
                            <div className="col-xl-12 bouton">
                                <img
                                src="./img/home2/icones/jeux.png"
                                alt='Accueil'
                                width="15%"
                                />
                                Liste des jeux
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* BODY PAGE */}
            <div className="row px-0 mx-0 py-0 my-0 background">
                <div className="row home px-0 mx-0 py-0 px-0">
                    <div className="offset col-xl-2 col-2"></div>
                    <div className="col-xl-8 col-8" id="carte">
                        <div className="card my-5">
                            <div className="card-header">
                                <h1 className="card-title">Les jeux vidéos</h1>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Ils commencent vers 1950 lorsque Ralph Baar a l’idée d’ajouter des jeux aux téléviseurs.  
                                </p>
                                <p className="card-text">
                                    Cependant, le premier jeu avec un gameplay suffisamment accrocheur et addictif voit le jour en 1972 sous le nom de Pong. Ce dernier n’a pas inventé l’univers du jeu vidéo, mais il a permis de donner le coup d’envoi de l’industrie vidéoludique qui connait une croissance explosive et fébrile aux États-Unis jusqu’en 1983 où un krach la fait migrer vers le Japon.  
                                </p>
                                <p className="card-text">
                                En 1985, il y aura une renaissance de l’industrie grâce au NES et au jeu Super Mario Bros qui amènent une nouvelle philosophie dans la conception des jeux vidéo c’est-à-dire plus riches et plus ouverts à tous. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="offset col-xl-2 col-2"></div>
                </div>
                <div className="row home px-0 mx-0 py-0 px-0">
                    <div className="offset col-xl-2 col-2"></div>
                    <div className="col-xl-8 col-8" id="carte">
                        <div className="card my-5">
                            <div className="card-header">
                                <h1 className="card-title">Les consoles de jeux</h1>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Ce sont des systèmes informatiques qui sont dédiés aux jeux vidéo. Contrairement aux ordinateurs, le matériel interne de la console peut rarement être amélioré.  
                                    <br></br>
                                    <br></br>
                                    Les consoles de salon se branchent sur un téléviseur et viennent normalement avec une manette de jeu. Les consoles portables ont plusieurs périphériques interactifs intégrés dans le boîtier et une grande autonomie d’énergie.  
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="offset col-xl-2 col-2"></div>
                </div>
            </div>
                {/* MENU ABONNEMENT NEWSLETTER */}
            <div className='row px-0 mx-0 py-3 abonnement'>
                <div className='offset col-xl-4 m-0 p-0'></div>
                <div className='col-xl-4 col-12 text-center mx-0 px-0'>
                    <h4 className="text-white">S'abonner aux nouvelles</h4>
                    <div class="input-group mb-3">
                        <input type="email" value={courriel} onChange={handleChange} class="form-control" placeholder="Votre adresse courriel" aria-label="Votre adresse courriel" aria-describedby="button-addon2" /> 
                        <button onClick={handleBtnClick} class="btn btn-outline-light" type="button" id="bouttonNews">S'abonner</button>
                    </div>
                </div>
                <div className='offset col-xl-4 m-0 p-0'></div>
            </div>


            <div class="position-fixed bottom-0 end-0 p-3" id="toastGood">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                <strong class="me-auto">Créateurs du site web</strong>
                <small>À l'instant</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Merci de vous être abonné à notre newsletter. Nous vous enverrons des nouvelles sur les jeux vidéos et les consoles de jeux.
                </div>
            </div>
            </div>
            <div class="position-fixed bottom-0 end-0 p-3" id="toastBad">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                <strong class="me-auto">Créateurs du site web</strong>
                <small>À l'instant</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Courriel invalide. Veuillez réessayer.
                </div>
            </div>
            </div>





        </div>
    );
}

export default Home;