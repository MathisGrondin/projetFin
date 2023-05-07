import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

function ModalZoomJeux(props) {

    const [show, setShow] = useState(0);

    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch('/bd/jeux.json')
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const lienSite= props.Site;
    const boutLien = <Button variant="outline-danger" href={lienSite} >Site</Button>;
    const boutPasLien = <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Ce jeu ne possède pas de site">
    <Button variant="outline-danger" disbled>Site</Button>
    </span>

    const boutAfficher = () => {
        if (lienSite === "") {
            return boutPasLien;
        }
        else {
            return boutLien;
        }
    }


    const boutonSite = () => {
        if (lienSite === "") {
            boutLien.disabeld = true;
        }
        else {
            boutLien.variant = "outline-secondary";
            boutLien.disabeld = false;
        }
    }

    return (
        <>
        <Button variant="primary" className='card-footer btn-primary' onClick={handleShow}>
            Aperçu détaillé
        </Button>

        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <div id="infosHaut"> 
                    <Modal.Title> <h3 className='text-black'> {props.titre} </h3> </Modal.Title>
                    <Modal.Title>
                        <div id="infosBas">
                            <h6 className='text-secondary m-0'> {props.dev}, </h6>
                            <h6 className='text-secondary mx-2'> {props.dateSortie} </h6>
                        </div>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <img src={props.image} className="img-fluid imgJeux" alt="..."/>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black'> Réalisateur </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Realisateur} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black'> Compositeur </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Compositeur} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black'> Genre </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Genre} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black'> Mode(s) </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Modes} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black'> Plateforme(s) </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Plateformes} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black'> Langue </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Langue} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black'> Évaluation </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Evaluation} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            {items.map((item) => (
                (item.Site !== "")
                &&
                (props.id === item.id)
                &&
                (
                    <Button variant="outline-primary" href={item.Site} target="_blank" id={item.id}>Accéder au site web officiel</Button>
                    )
                    ||
                    (item.Site === "")
                    &&
                    (props.id === item.id)
                    &&
                    (
                    <Button variant="outline-danger" title="Cette page ne possède pas de site web" disabled>Ne possède pas de site internet</Button>
                )
            ))}
            <Button variant="primary" onClick={handleClose}>
                Fermer
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalZoomJeux;