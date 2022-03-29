import React from "react";

export default function Category() {
  return (
    <div className="category" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2>Browse Our Category</h2>
        <h2 style={{ color: "#8bac3e" }}>Receipt</h2>
        <div className="mt-5">
          <div className="row justify-content-center">
            <div className="col-md-2 my-2">
              <div className="card" style={{ background: "#F0FEEB" }}>
                <img src="/assets/images/cupcake.png" />
                <div className="card-body" style={{ marginTop: 100 }}>
                  <p style={{ fontSize: "16px" }}>
                    <b>Cupcake</b>
                  </p>
                  <p>22 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2">
              <div className="card" style={{ background: "#DDE9EB" }}>
                <img src="/assets/images/pizza.png" />
                <div className="card-body" style={{ marginTop: 100 }}>
                  <p style={{ fontSize: "16px" }}>
                    <b>Pizza</b>
                  </p>
                  <p>25 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2">
              <div className="card" style={{ background: "#EAEEFA" }}>
                <img src="/assets/images/kebab.png" />
                <div className="card-body" style={{ marginTop: 100 }}>
                  <p style={{ fontSize: "16px" }}>
                    <b>Kebab</b>
                  </p>
                  <p>12 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2">
              <div className="card" style={{ background: "#F9EEF3" }}>
                <img src="/assets/images/salmon.png" />
                <div className="card-body" style={{ marginTop: 100 }}>
                  <p style={{ fontSize: "16px" }}>
                    <b>Salmon</b>
                  </p>
                  <p>22 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2">
              <div className="card" style={{ background: "#F3F7D9" }}>
                <img src="/assets/images/doughnut.png" />
                <div className="card-body" style={{ marginTop: 100 }}>
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
