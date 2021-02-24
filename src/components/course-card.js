import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-style.css';

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse,
        title,
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            {editing && <i onClick={() => saveTitle()} className="fas fa-check my-controls-at-top-right-check"></i>}
            {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times my-controls-at-top-right-times"></i>}
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"
                 alt="..."/>
            <div className="card-body">
                {
                    editing &&
                    <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
                    // <h5 className="card-title">{course.title}</h5>
                }
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                <img src={``}/>
                {
                    !editing &&
                    <Link to="/courses/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                }
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit ys-location"></i>}
            </div>
        </div>
    </div>
    )
}
export default CourseCard