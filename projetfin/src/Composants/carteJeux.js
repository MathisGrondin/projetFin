import ModalZoomJeux from "./modalZoomJeux";

function CarteJeux(props) {
    return (
        <>

            <div className="col">
                <div className="card h-100 carte-info photoCarteJeux">
                    <img
                        src={props.Image}
                        // height="25%"
                        alt="jeux"
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold">{props.titre}</h5>
                        <p className="card-text">{props.dateSortie}</p>
                    </div>
                        <ModalZoomJeux
                            id={props.id}
                            titre={props.titre}
                            image={props.Image}
                            dev={props.dev}
                            Realisateur={props.Realisateur}
                            Compositeur={props.Compositeur}
                            Genre={props.Genre}
                            dateSortie={props.DateSortie}
                            Modes={props.Modes}
                            Plateformes={props.Plateformes}
                            Langue={props.Langue}
                            Evaluation={props.Evaluation}
                        />
                </div>
            </div>
        {/* <div className="offset col-xl-1 col-2"></div>
        <div className="col-xl-2 col-4 m-0 p-0">
            <div className="card carte-info photoCarteJeux p-0">
                <div className="card-header p-0">
                    <img
                    src={props.Image}
                    height="350px"
                    border-radius="10px"
                    alt={props.titre}
                    />
                </div>
                <div className="card-body">
                    <p className="card-text text-center">
                        <b>
                            {props.titre}
                        </b>
                    </p>
                </div>
                
            </div>
        </div>
        <div className="offset col-xl-1 col-2"></div>
 */}
        </>
    );
}

export default CarteJeux;