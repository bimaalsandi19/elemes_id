import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/images/logo.png" width="150px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarID"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" aria-current="page" href="#">
              About
            </a>
            <a className="nav-link" aria-current="page" href="#">
              Promotion
            </a>
            <a className="nav-link" aria-current="page" href="#">
              Blogs
            </a>
            <a className="nav-link" aria-current="page" href="#">
              Contact Us
            </a>
          </div>
        </div>
        <div className="collapse navbar-collapse  justify-content-end">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Masuk
            </a>
            <a className="btn btn-green" aria-current="page" href="#">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
