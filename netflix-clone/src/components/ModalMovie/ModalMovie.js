import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import swal from 'sweetalert';

export default function ModalMovie({ ele, show, handleClose }) {
    // Getting the required inf from the form
    function handleFormSubmit(e) {
        e.preventDefault();
        let comment = e.target.comment.value;
        // To send a POST request to save the recipe in our database as favorite recipe
        addToFavList(ele, comment)
    }
    async function addToFavList(movie, comment) {
        const url = `${process.env.REACT_APP_SERVER}/addMovie`
        // This should match the required data in the server
        const data = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comments: comment
        }
        // Use Fetch to send POST request
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        swal("Favorite Movie", "You added a new Movie", "success");
        handleClose();
        console.log(response)
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{ele.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`https://image.tmdb.org/t/p/w200${ele.poster_path}`} alt="" />
            </Modal.Body>
            <Modal.Footer>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="comment" type="text" placeholder="Enter Comment" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}