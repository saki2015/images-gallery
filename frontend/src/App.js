import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Search from "./components/Search";
import Welcome from "./components/Welcome";

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5050";

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  //console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // prevent reloading of page which clears out event
    // details from console
    // console.log(e); // by inspecting the event in the console, we know
    // how to get value of the input field (as in next line)
    //console.log(e.target[0].value);
    //console.log(word); // after word is defined, one can use that instaed of e.target[0].value to get user input in the search field
    // fetch(
    //   `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
    // )
    fetch(`${API_URL}/new-image?query=${word}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //        setImages([data, ...images]); // create new array with fetched image + old images
        setImages([{ ...data, title: word }, ...images]);
      }) //console.log(images);// wrong location for printing state of 'images' array
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  console.log(process.env);

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
