import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";

export default function ModalMovie({ ele, show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{ele.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`https://image.tmdb.org/t/p/w200${ele.poster_path}`} alt="" />
            </Modal.Body>
            <Modal.Footer>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" placeholder="Enter Comment" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}