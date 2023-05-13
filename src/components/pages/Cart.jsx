import "./cart.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

export default function CartCheckout() {
  var [empdatacart, empdatachangecart] = useState(null);
  useEffect(() => {
    fetch("https://63dc6729c45e08a0435960cf.mockapi.io/cart")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachangecart(resp);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);
  let total = 0;
  empdatacart && empdatacart.map((item) => (total += parseInt(item.pricecart)));
  const validating = () => {
    const name = document.getElementById("nameoncart");
    if (name === "") {
      alert("bạn chưa nhập tên");
    }
  };
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>
                    {/*  */}
                    {empdatacart &&
                      empdatacart.map((item) => (
                        <div className="d-flex align-items-center mb-5">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              src={require(`../assets/${item.imgcart}.png`)}
                              fluid
                              style={{ width: "150px" }}
                              alt="Generic placeholder image"
                            />
                          </div>

                          <div className="flex-grow-1 ms-3">
                            <a href="#!" className="float-end text-black">
                              <MDBIcon fas icon="times" />
                            </a>
                            <MDBTypography tag="h5" className="text-primary">
                              {item.namecart}
                            </MDBTypography>
                            <MDBTypography
                              tag="h6"
                              style={{ color: "#9e9e9e" }}
                            >
                              Color: green
                            </MDBTypography>

                            <div className="d-flex align-items-center">
                              <p className="fw-bold mb-0 me-5 pe-3">
                                {item.pricecart}$
                              </p>

                              <div className="def-number-input number-input safari_only"></div>
                            </div>
                          </div>
                        </div>
                      ))}

                    {/*  */}
                    <div className="d-flex align-items-center mb-5"></div>

                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        {total}$
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBRow>
                        <MDBInput
                          className="mb-5"
                          label="Name on card"
                          type="text"
                          size="lg"
                          id="nameoncart"
                        />

                        <MDBRow>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Expiration"
                              type="text"
                              size="lg"
                              minLength="7"
                              maxLength="7"
                              placeholder="MM/YYYY"
                              id="exponcart"
                            />
                          </MDBCol>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Cvv"
                              type="text"
                              size="lg"
                              minLength="3"
                              maxLength="3"
                              placeholder="&#9679;&#9679;&#9679;"
                              id="cvvoncart"
                            />
                          </MDBCol>
                        </MDBRow>
                      </MDBRow>
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        <a href="#!"> obcaecati sapiente</a>.
                      </p>
                      <Button variant="primary" onClick={validating}>
                        buy now
                      </Button>{" "}
                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <Link to="/Home">
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to shopping
                        </Link>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
