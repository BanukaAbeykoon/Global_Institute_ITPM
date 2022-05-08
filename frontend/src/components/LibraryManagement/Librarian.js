import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class Librarian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Library: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/Library").then((res) => {
      if (res.data.success) {
        this.setState({
          Library: res.data.existingPosts,
        });

        console.log(this.state.Library);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/Library/delete/${id}`).then((res) => {
      swal.fire("Delete", "Deleted Successfully", "success");
      this.retrievePosts();
    });
  };

  filterData(Library, searchKey) {
    const result = Library.filter(
      (Library) =>
        Library.bookid.toLowerCase().includes(searchKey) ||
        Library.bookname.toLowerCase().includes(searchKey) ||
        Library.bookstatus.toLowerCase().includes(searchKey)
    );
    this.setState({ Library: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get(`http://localhost:8000/Library`).then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="container">
              {/* add nav bar */}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9 mt-2 mb-2">
                    <nav
                      className="navbar navbar-expand-lg navbar-light"
                      style={{
                        backgroundColor: "#e3f2fd",
                        width: "134%",
                        border: " solid #5f9ea0",
                        padding: "0px",
                      }}
                    >
                      <div className="container-fluid">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toogle="collapse"
                          data-bs-target="#navbarNav"
                          aria-controls="navbarNav"
                          aria-expanded="false"
                          aria-label="Tooggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                          className="collapse navbar-collapse"
                          id="navbarNav"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/" className="nav-link">
                                Main Dashboard -
                              </a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/LBDashboard" className="nav-link">
                                Library Dashboard -
                              </a>
                            </li>

                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/LBrowse" className="nav-link">
                                Browse For Books -
                              </a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/Librarian" className="nav-link">
                                Settings -
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <hr></hr>
              {/* 
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book ID</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Book Related Module</th>
                    <th scope="col">Book Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.posts.map((posts, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>

                      <td>
                        <a
                          href={`/post/${posts._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {posts.bookid}
                        </a>
                      </td>

                      <td>{posts.bookname} </td>
                      <td>{posts.author} </td>
                      <td>{posts.relatedmodule} </td>
                      <td>{posts.bookstatus} </td>
                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/edit/${posts._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(posts._id)}
                        >
                          <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
              <div
                class="form-check"
                style={{
                  float: "right",
                  width: "26%",
                }}
              >
                <div
                  class="a1"
                  style={{
                    background: "transparent",
                    opacity: 0.7,
                  }}
                >
                  <div className="col-lg-30 mt-20 mb-2">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      name="searchQuery"
                      onChange={this.handleSearchArea}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="asdw" style={{}}>
                <div className="col-lg-9 mt-2 mb-2">
                  <div
                    className="p-3 mb-2 bg-dark text-light rounded-3"
                    style={{
                      background: "transparent",
                      height: "43px",
                      opacity: 0.5,
                      padding: "10px",
                    }}
                  >
                    <div class="form-check" style={{ float: "left" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value=""
                        onChange={this.handleSearchArea}
                      />

                      <label class="form-check-label" for="exampleRadios2">
                        ALL
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                        </div>
                      </label>
                    </div>

                    <div class="form-check" style={{ float: "left" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="yes"
                        onChange={this.handleSearchArea}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Avalable
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp;&nbsp;
                        </div>
                      </label>
                    </div>
                    <div class="form-check" style={{ float: "left" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="no"
                        onChange={this.handleSearchArea}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Not Avalable
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <br />
              <button className="btn btn-primary btn-lg">
                <a
                  href="/AddLB"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ADD NEW BOOK
                </a>
              </button>
              <br /> <br />
              <div class="row">
                {this.state.Library.map((Library, index) => (
                  <div class="col-sm-4">
                    <div class="card" style={{ width: "18rem" }}>
                      {/* <img
                  src="%PUBLIC_URL%../../fut.png"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                /> */}

                      <div class="card-body">
                        <a
                          className="btn btn-primary"
                          href={`/Library/${Library._id}`}
                          style={{ textDecoration: "none" }}
                        ></a>
                        <h5>No.0{index + 1}</h5>
                        <h6>Book Name:{Library.bookname} </h6>
                        <h6>Author:{Library.author} </h6>
                        <h6>Related Module:{Library.relatedmodule} </h6>
                        <h6>Book Status:{Library.bookstatus} </h6>
                        <h6>E-mail:{Library.username} </h6>
                        <h6>Password:{Library.Password} </h6>
                        <a
                          className="btn btn-warning"
                          href={`/EditLB/${Library._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(Library._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
