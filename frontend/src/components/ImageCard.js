import React from "react";
import { Button, Card } from "react-bootstrap";

const ImageCard = ({ image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
