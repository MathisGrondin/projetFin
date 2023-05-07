import ModalZoom from "./modalZoomConsoles";

function CarteConsoles(props) {
    let anneeSortie = props.dateSortie;

    const regexp = /[0-9]{4}$/g;
    const tableau = anneeSortie.match(regexp);
    anneeSortie = tableau[0];

    return (
        <>
            <div className="col">
                <div className="card h-100 carte-info photoCarteConsole">
                        <img
                            src={props.Image}
                            // height="25%"
                            alt="console"
                            className="card-img-top"
                        />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.nom}</h5>
                        <p className="card-text">{anneeSortie}</p>
                    </div>
                    <div className="card-footer text-center">
                        <ModalZoom 
                            titre={props.nom}
                            image={props.Image}
                            Fabricant={props.Fabricant}
                            Generation={props.Generation}
                            dateSortie={props.dateSortie}
                            type={props.type}
                            Processeur={props.Processeur}
                            ProcesseurGraph={props.ProcesseurGraph}
                            Stockage={props.Stockage}
                            Affichage={props.Affichage}
                            Batterie={props.Batterie}
                            Logiciel={props.Logiciel}
                            carac1={props.carac1}
                            carac2={props.carac2}
                            carac3={props.carac3}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="offset col-xl-1 col-2"></div>
            <div className="col-xl-2 col-4 m-0 p-0">
                <div className="card carte-info photoCarteConsole">
                    <div className="card-header text-center">
                        <img
                        src={props.Image}
                        height="75px"
                        alt="console"
                        />
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fw-bold">{props.nom} ({anneeSortie})</p>
                    </div>
                <ModalZoom 
                titre={props.nom}
                image={props.Image}
                Fabricant={props.Fabricant}
                Generation={props.Generation}
                dateSortie={props.dateSortie}
                type={props.type}
                Processeur={props.Processeur}
                ProcesseurGraph={props.ProcesseurGraph}
                Stockage={props.Stockage}
                Affichage={props.Affichage}
                Batterie={props.Batterie}
                Logiciel={props.Logiciel}
                carac1={props.carac1}
                carac2={props.carac2}
                carac3={props.carac3}
                />
            </div>
        </div>
        <div className="offset col-xl-1 col-2"></div> */}

        </>
    );
}

export default CarteConsoles;