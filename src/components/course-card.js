import React from 'react'
import {Link} from "react-router-dom";
import './course-style.css';

const CourseCard = ({course}) =>
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            <i className="fas fa-check my-controls-at-top-right-check"></i>
            <i className="fas fa-times my-controls-at-top-right-times"></i>
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <img src={``}/>
                <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                <i className="fas fa-edit ys-location"></i>
            </div>
        </div>
    </div>

export default CourseCard