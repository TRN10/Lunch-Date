import React from 'react'
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faSolidIcons from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';

function Gundagai() {
    return (
        <div className='background-yellow'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    {/* <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header> */}

                    <Modal.Body>

                        <h1 id='logo'><FontAwesomeIcon icon={faSolidIcons.faUtensils} /></h1>

                        <h2> 11 Jan 2023</h2>

                        <h1>Gundagai</h1>
                        <br></br>
                        <hr></hr>
                        <h2 className='meal-description'>Beef stir fry</h2>
                        <hr></hr>

                        <h2 id="total">13</h2>

                        <br></br>

                        <h3 className='dessert'>dessert = <strong>11</strong></h3>
                        <h3 className='soup'>soup = <strong>3</strong></h3>
                        <br></br>

                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>

                                    <th colSpan={2}>client name</th>
                                    <th>order</th>
                                    <th>quantity</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td colSpan={2}>Mark Daniels</td>
                                    <td>S M D</td>
                                    <td>2</td>

                                </tr>
                                <tr>

                                    <td colSpan={2}>Jacob Minnow</td>
                                    <td>M D</td>
                                    <td>2</td>

                                </tr>
                                <tr>

                                    <td colSpan={2}>Anna McGill</td>
                                    <td>M D</td>
                                    <td>2</td>
                                </tr>
                                <tr>

                                    <td colSpan={2}>Ginger Noble</td>
                                    <td>M D</td>
                                    <td>1</td>
                                </tr>
                                <tr>

                                    <td colSpan={2}>Lana Doherty</td>
                                    <td>M D</td>
                                    <td>2</td>
                                </tr>
                                <tr>

                                    <td colSpan={2}>Darcy Kell</td>
                                    <td>M D</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Button id="generate-run" variant="secondary" type="submit">
                            generate run sheet
                        </Button>



                    </Modal.Body>

                    {/* <Modal.Footer> */}

                    {/* <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button> */}
                    {/* </Modal.Footer> */}
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Gundagai;