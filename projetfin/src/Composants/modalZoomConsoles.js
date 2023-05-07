import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalZoom(props) {

    const [show, setShow] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="secondary" onClick={handleShow}>
            Aperçu détaillé
        </Button>

        <Modal show={show} onHide={handleClose} fullscreen="true" size="lg">
            <Modal.Header>
                <div id="infosHaut"> 
                    <Modal.Title> <h3 className='text-black'> {props.titre} </h3> </Modal.Title>
                    <Modal.Title>
                        <div id="infosBas">
                            <h6 className='text-secondary m-0'> {props.Fabricant}, </h6>
                            <h6 className='text-secondary mx-2'> {props.dateSortie} </h6>
                        </div>
                    </Modal.Title>
                </div>
                <Button variant="primary" className="mx-2 btn-close" onClick={handleClose} />
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <img src={props.image} className="img-fluid imgConsole" alt="..."/>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Génération </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Generation} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Type </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.type} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Processeur </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Processeur} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Processeur Graphique </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.ProcesseurGraph} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Stockage </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Stockage} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Affichage </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Affichage} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Batterie </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Batterie} </p>
                            </div>
                        </div>
                        <div className="row table">
                            <div className="col-xl-4 col-6">
                                <p className='text-black fw-bold'> Logiciel </p>
                            </div>
                            <div className="col-xl-8 col-6">
                                <p className='text-black text-end'> {props.Logiciel} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <hr className='my-2'></hr>
                    <div className='col-xl-12 col-12'>
                        <h5 className='text-black text-center'>Caractéristiques principales</h5>
                        <ul>
                            <li> {props.carac1} </li>
                            <li> {props.carac2} </li>
                            <li> {props.carac3} </li>
                        </ul>
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
            <Button variant="outline-primary" onClick={handleClose}>
                Fermer
            </Button>
            </Modal.Footer> */}
        </Modal>
        </>
    );
}

export default ModalZoom;