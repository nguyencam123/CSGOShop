import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import mying from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz48.png";
import myimgperson from "../assets/person_FILL0_wght400_GRAD0_opsz48.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Header() {
  var name = localStorage.getItem("username");
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="https://html.design/preview/?theme=timups">
            CS-GOVN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} className="textnabar">
                Home
              </Link>
              <Link to={"/watches"} className="textnabar">
                Watches
              </Link>
              <Link to={"/about"} className="textnabar">
                About
              </Link>
              <NavDropdown title="Contact US" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/action">Action</NavDropdown.Item>

                <NavDropdown.Item href="/Anotheraction">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/Something">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Separatedlink">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div>
              {" "}
              <div className="headercart">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
              <Link to="/shopingcart" className="headercart">
                <div className="picturecart">
                  <img src={mying} alt="" width={"35px"} height={"35px"} />
                </div>
              </Link>
              <Link to="/login" className="headercart">
                <div className="picturecart">
                  <img
                    src={myimgperson}
                    alt=""
                    width={"35px"}
                    height={"35px"}
                  />
                  {name}
                </div>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
