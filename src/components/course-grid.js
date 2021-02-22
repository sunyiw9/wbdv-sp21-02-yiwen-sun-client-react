import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <div className="container-fluid">
        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
        <h2>Course Grid {courses.length}</h2>
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