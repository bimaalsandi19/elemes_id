import React from "react";
import cupcake from "../../assets/images/cupcake.png";
import pizza from "../../assets/images/pizza.png";
import kebab from "../../assets/images/kebab.png";
import salmon from "../../assets/images/salmon.png";
import doughnut from "../../assets/images/doughnut.png";

export default function Category() {
  return (
    <div className="category" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2>Browse Our Category</h2>
        <h2 style={{ color: "#8bac3e" }}>Receipt</h2>
        <div className="mt-5">
          <div className="row justify-content-center">
            <div className="col-md-2 my-2 col-6">
              <div className="card" style={{ background: "#F0FEEB" }}>
                <img src={cupcake} />
                <div className="card-body">
                  <p style={{ fontSize: "16px" }}>
                    <b>Cupcake</b>
                  </p>
                  <p>22 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2 col-6">
              <div className="card" style={{ background: "#DDE9EB" }}>
                <img src={pizza} />
                <div className="card-body">
                  <p style={{ fontSize: "16px" }}>
                    <b>Pizza</b>
                  </p>
                  <p>25 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2 col-6">
              <div className="card" style={{ background: "#EAEEFA" }}>
                <img src={kebab} />
                <div className="card-body">
                  <p style={{ fontSize: "16px" }}>
                    <b>Kebab</b>
                  </p>
                  <p>12 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2 col-6">
              <div className="card" style={{ background: "#F9EEF3" }}>
                <img src={salmon} />
                <div className="card-body">
                  <p style={{ fontSize: "16px" }}>
                    <b>Salmon</b>
                  </p>
                  <p>22 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2 col-6">
              <div className="card" style={{ background: "#F3F7D9" }}>
                <img src={doughnut} />
                <div className="card-body">
                  <p style={{ fontSize: "16px" }}>
                    <b>Doughnut</b>
                  </p>
                  <p>11 Item</p>
                </div>
              </div>
            </div>
          </div>
          <div className="navigate">
            <span>
              <button className="btn btn-prev">PREV</button>
            </span>
            <span>
              <button className="btn btn-prev mx-2">NEXT</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
