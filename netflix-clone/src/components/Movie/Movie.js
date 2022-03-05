import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from "../ModalMovie/ModalMovie"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieList({ trends }) {
    const [chosenMovie, setChosenMovie] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleChosenMovie(movie) {
        setChosenMovie(movie)
        handleShow();
    }
    return (
        <>
            <Card style={{ width: '18rem', textAlign: 'center', marginBottom: '20px' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${trends.poster_path}`} />
                <Card.Body>
                    <Card.Title>Title:{trends.title}</Card.Title>
                    ID: {trends.id}<br></br>
                    Release Date:{trends.release_date}<br></br>
                    <Card.Text>
                        Overview:{trends.overview}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleChosenMovie(trends)}>Add to the favorite</Button>
                </Card.Body>
            </Card>
            {chosenMovie && <ModalMovie ele={chosenMovie} show={show} handleClose={handleClose} />}
        </>
    )
};
export default MovieList;