import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstslide from "../assets/Screenshot 2023-02-15 142432.png";
import secondslide from "../assets/Screenshot 2023-02-15 142518.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  var [empdata, empdatachange] = useState(null);
  useEffect(() => {
    fetch("https://63dc6729c45e08a0435960cf.mockapi.io/arr")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);

  return (
    <>
      {/* slide show */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={firstslide} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={secondslide} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={firstslide} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*  */}
      <br></br>
      <br></br>
      <div className="container">
        <center>
          <h1>Latest Skin CSGO</h1>
        </center>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          {empdata &&
            empdata.map((item) => (
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div className="carditem">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require(`../assets/${item.img}.png`)}
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.price}$</Card.Text>
                      <Link to={`/Detail/${item.id}`}>
                        {" "}
                        <Button variant="primary">See details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default Home;
