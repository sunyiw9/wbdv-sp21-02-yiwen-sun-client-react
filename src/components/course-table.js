import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import './course-style.css';

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                {/*
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4"><h6>Title</h6></div>
                        <div className="col-3"><h6>Owned by</h6></div>
                        <div className="col-3"><h6>Last Modified</h6></div>
                        <div className="col-2">
                            <Link to="/courses/grid">
                                <i className="fas fa-th"></i>
                            </Link>
                        </div>
                    </div>

                    <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
                */}
                <div className="container-fluid">
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Owned by</th>
                        <th>Last Modified</th>
                        <th>
                            <Link to="/courses/grid">
                            <i className="fas fa-th"></i>
                            </Link>
                        </th>
                    </tr>
                    <tbody>
                    {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
                    {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
                    {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}
                    {/*<CourseRow title="CS4567" owner="dan"   lastModified={"4/12/36"}/>*/}
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}