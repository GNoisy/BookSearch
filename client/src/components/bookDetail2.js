import React from "react";
import { Row, Col, Button } from 'react-bootstrap/';
import BookContext from '../utils/BookContext';

function BookDetail2(props) {

    function handleButtonClick(event) {
        let searchString;
        console.log("handleButtonClick: ", event.target.value);
        return searchString = event.target.value;
      }

    return (
        <BookContext.Consumer>

                <div>
                    <Col>
                        <Row>
                            <Col className="left"><h3>Title {props.title}</h3>
                            <h5>Author {props.author}</h5>
                            </Col>
                            <Col md={{ span: 4, offset: 4 }}>
                                <Button className="mr-2" onClick={handleButtonClick}>View</Button>
                                <Button>Save</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <p><img src={props.image}></img>Image</p>
                            </Col>
                            <Col md={10}>
                                <p>Description orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised </p>
                                <p>LINK: {props.link}</p>
                            </Col>
                            
                        </Row>
                    </Col>
                </div>

        </BookContext.Consumer>          
    )
}

export default BookDetail2; 

// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's thumbnail image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API
