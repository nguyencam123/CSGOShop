import "./manage.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Mymanage = () => {
  var [empdata, empdatachange] = useState(null);
  var [name, setname] = useState("");
  var [price, setprice] = useState(0);
  var [describe, setdescribe] = useState("");
  var [img, setimg] = useState("");
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
  const create = (e) => {
    e.preventDefault();
    let id = crypto.randomUUID();
    const data = {
      id,
      name,
      price,
      describe,
      img,
    };
    fetch("https://63dc6729c45e08a0435960cf.mockapi.io/arr", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Thêm thành công");
          fetch("https://63dc6729c45e08a0435960cf.mockapi.io/arr")
            .then((res) => res.json())
            .then((data) => {
              empdatachange(data);
            });
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại sau");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    empdatachange();
  }, []);
  const deleteapi = (id, e) => {
    e.preventDefault();
    fetch(`https://63dc6729c45e08a0435960cf.mockapi.io/arr/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("xóa thành công");
          fetch("https://63dc6729c45e08a0435960cf.mockapi.io/arr")
            .then((res) => res.json())
            .then((data) => {
              empdatachange(data);
            });
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại sau");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="tablemanage">
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter name"
            required
            onChange={(e) => setname(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter price"
            required
            onChange={(e) => setprice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>describe</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setdescribe(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>img</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter img"
            required
            onChange={(e) => setimg(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => create(e)}>
          create
        </Button>
      </Form>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>Table manage</h2>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead className="bg-white test-white">
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>describe</th>
                <th>img</th>
              </thead>
              <tbody>
                {empdata &&
                  empdata.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.describe}</td>
                      <td>
                        <img
                          src={require(`../assets/${item.img}.png`)}
                          alt=""
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={(e) => deleteapi(item.id, e)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mymanage;
