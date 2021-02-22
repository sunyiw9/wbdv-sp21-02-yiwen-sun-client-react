import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import './course-style.css';

const CourseGrid = ({courses}) =>
    <div>
        <div className="container-fluid">
            <div className="row">

                <div className="col-4 d-none d-md-block">
                    <h3>Recent Documents</h3>
                </div>
                <div className="col-5 d-none d-md-block">
                    <h3>Owned by me</h3>
                </div>
                <div className="col">
                    <i className="fas fa-folder fa-2x float-right"></i>
                </div>
                <div className="col">
                    <i className="fas fa-sort-alpha-up-alt fa-2x ys-sort float-right"></i>
                </div>
                <div className="col">
                <Link to="/courses/table">
                        <i className="fas fa-list fa-2x float-right"></i>
                </Link>
                </div>

                </div>
            {/*<h2>Course Grid {courses.length}</h2>*/}

            <div className="row">
                {
                    courses.map(course =>
                        <CourseCard course={course}/>
                    )
                }
            </div>

        </div>
    </div>

export default CourseGrid