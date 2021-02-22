import React from 'react'
import {Link} from "react-router-dom";
import './course-style.css';

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
    <div>
        <div className="container-fluid">
        <h2>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
            <i onClick={() => history.goBack()}
               className="fas fa-times float-right"></i>
            {/*<i onClick={() => props.history.goBack()}*/}
            {/*   className="fas fa-times float-right"></i>*/}
        </h2>

            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <a className="nav-link">
                        <i className="fas fa-times fa-lg text-white"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">CS5610 - WebDev</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Build</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Theme</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Store</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Apps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a>
                </li>
                <li className="nav-item ml-auto">
                    <a className="nav-link" href="#">
                        <i className="fas fa-plus fa-lg"></i>
                    </a>
                </li>
            </ul>

            <div className="row">
                <div className="col-4">
                    <div className="list-group">
                        <a className="list-group-item" href="#">
                            Module 1 - JQuery
                            <i className="fas fa-times float-right"></i>
                        </a>
                        <a className="list-group-item active" href="#">
                            Module 2 - React
                            <i className="fas fa-times float-right"></i>
                        </a>
                        <a className="list-group-item" href="#">
                            Module 3 - Redux
                            <i className="fas fa-times float-right"></i>
                        </a>
                        <a className="list-group-item" href="#">
                            Module 4 - Native
                            <i className="fas fa-times float-right"></i>
                        </a>
                        <a className="list-group-item" href="#">
                            Module 5 - Angular
                            <i className="fas fa-times float-right"></i>
                        </a>
                        <a className="list-group-item" href="#">
                            Module 6 - Node
                            <i className="fas fa-times float-right"></i>
                        </a>
                        <a className="list-group-item" href="#">
                            Module 7 - Mongo
                            <i className="fas fa-times float-right"></i>
                        </a>
                        <a className="list-group-item" href="#">
                            <i className="fas fa-plus-circle float-right"></i>
                        </a>
                    </div>
                </div>

                <div className="col-8">
                    <ul className="nav nav-pills">
                        <li className="nav-item pill-1">
                            <a className="nav-link text-white" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item pill-1">
                            <a className="nav-link text-white active" aria-current="page" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item pill-1">
                            <a className="nav-link text-white" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item pill-1">
                            <a className="nav-link text-white" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item plus-1">
                            <i className="fas fa-plus-square fa-2x"></i>
                        </li>
                    </ul>
                        Content intentionally left blank
                </div>
            </div>
    </div>
    </div>

export default CourseEditor