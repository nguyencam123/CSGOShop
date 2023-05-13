import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";

const Detail = () => {
  const { getid } = useParams();
  const [empdata, empdatachange] = useState(null);

  useEffect(() => {
    fetch(`https://63dc6729c45e08a0435960cf.mockapi.io/arr/${getid}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, [getid]);

  const createcart = (e) => {
    e.preventDefault();

    // tạo một bản sao của empdata
    if (!empdata) {
      console.log("empdata is null");
      return;
    }

    const data = {
      arrID: empdata.id,
      namecart: empdata.name,
      pricecart: empdata.price,
      describecart: empdata.describe,
      imgcart: empdata.img,
    };
    // sử dụng biến mới này để gửi yêu cầu POST đến API
    fetch("https://63dc6729c45e08a0435960cf.mockapi.io/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Thêm vào giỏ hàng thành công");
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại sau");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <main>
      <div className="container-xl">
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <center>
              <Card.Img
                className="detailimg"
                variant="top"
                src={empdata ? require(`../assets/${empdata.img}.png`) : null}
              />
            </center>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="con">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              &emsp;
              <div className="text1">Butterfly Knife </div>
              <div className="text2">/ Minimal Wear</div>
            </div>

            <h4 className="detailname">{empdata && empdata.name}</h4>
            <div className="text3">{empdata && empdata.describe}</div>
            <div className="timegh">
              <Card.Img
                className="imgrocket"
                variant="top"
                src={require("../assets/rocket_launch_FILL0_wght400_GRAD0_opsz48.png")}
              />{" "}
              Thời gian giao hàng: 363m
            </div>
            <div className="timegh1">
              <Card.Img
                className="imgrocket"
                variant="top"
                src={require("../assets/local_fire_department_FILL0_wght400_GRAD0_opsz48.png")}
              />
              Tỉ lệ thành công: 0.27%
            </div>
            <div className="buttonfooter1">
              <div
                class="progress"
                role="progressbar"
                aria-label="Danger striped example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar progress-bar-striped bg-danger"></div>
              </div>
              <div className="displaydetail">
                <div className="textleft">Float</div>
                <div className="textright">0.0711229220</div>
              </div>
              <hr></hr>
              <div className="displaydetail">
                <div className="textleft">Chất Lượng</div>
                <div className="textright">Mật Vụ</div>
              </div>
              <div className="displaydetail">
                <div className="textleft">Pattern</div>
                <div className="textright">&emsp;&emsp;&emsp;186</div>
              </div>
            </div>
            <div className="floatfooter">
              <div className="centerprice">
                <div className="price">{empdata && empdata.price} $</div>
                <div className="textprice">Giá</div>
              </div>
              <button type="button" class="btn btn-outline-success btn-md">
                mua ngay
              </button>
              &emsp;
              <button
                type="button"
                class="btn btn-outline-danger btn-md"
                onClick={(e) => createcart(e)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Detail;
