import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import './course-style.css';

class CourseManager extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {value: ''};

        this.inputChange = this.inputChange.bind(this);
    }

    state = {
        courses: [],
    }


    inputChange(event) {
        this.setState({value: event.target.value});
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)

                // courses: prevState.courses.map(c => {
                //   if(c._id === course._id) {
                //     return course
                //   } else {
                //     return c
                //   }
                // })
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //       courses: actualCourses
        //     }))
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: this.state.value,
            owner: "me",
            lastModified: "01/01/2021"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))

        // this.state.courses.push(newCourse)
        // this.setState(this.state)
        this.state.value = "";
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //   courses: newCourses
                // })
                // this.setState((prevState) => {
                //   // let nextState = {...prevState}
                //   // nextState.courses =
                //   //     prevState
                //   //         .courses
                //   //         .filter(course => course !== courseToDelete)
                //
                //   let nextState = {
                //     ...prevState,
                //     courses: prevState.courses.filter
                //               (course => course !== courseToDelete)
                //   }
                //
                //   return nextState
                // })

                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                {/*
                <Link to="/">
                    <i className="fas fa-2x fa-home float-left"></i>
                </Link>
                <h1>Course Manager</h1>
                */}
                {/*
                <div className="wbdv-sticky-nav-bar">
                    <div className="row">
                        <div className="col-1">
                            <Link to="/">
                            <i className="fas fa-bars fa-2x"></i>
                            </Link>
                        </div>
                        <div className="col-2 d-none d-lg-block">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-8">
                            <input className="form-control"
                                   placeholder="New Course Title"
                                   id="course-title"
                                    value={this.state.value}
                                    onChange={this.inputChange}/>
                                <label htmlFor="course-title"></label>
                        </div>
                        <div className="col-1">
                            <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                        </div>
                        <div className="ys-plus">
                            <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                        </div>
                    </div>
                </div>
                */}

                {/* <button onClick={this.addCourse}>Add Course</button>*/}
                <Route path="/courses/table">

                    <div className="wbdv-sticky-nav-bar">
                        <div className="row">
                            <div className="col-1">
                                <Link to="/">
                                    <i className="fas fa-bars fa-2x"></i>
                                </Link>
                            </div>
                            <div className="col-2 d-none d-lg-block">
                                <h4>Course Manager</h4>
                            </div>
                            <div className="col-8">
                                <input className="form-control"
                                       placeholder="New Course Title"
                                       id="course-title"
                                       value={this.state.value}
                                       onChange={this.inputChange}/>
                                <label htmlFor="course-title"></label>
                            </div>
                            <div className="col-1">
                                <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                            </div>
                            <div className="ys-plus">
                                <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                            </div>
                        </div>
                    </div>

                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/grid">

                    <div className="wbdv-sticky-nav-bar">
                        <div className="row">
                            <div className="col-1">
                                <Link to="/">
                                    <i className="fas fa-bars fa-2x"></i>
                                </Link>
                            </div>
                            <div className="col-2 d-none d-lg-block">
                                <h4>Course Manager</h4>
                            </div>
                            <div className="col-8">
                                <input className="form-control"
                                       placeholder="New Course Title"
                                       id="course-title"
                                       value={this.state.value}
                                       onChange={this.inputChange}/>
                                <label htmlFor="course-title"></label>
                            </div>
                            <div className="col-1">
                                <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                            </div>
                            <div className="ys-plus">
                                <i className="fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                            </div>
                        </div>
                    </div>

                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor props={props}/>}>*/}
                {/*</Route>*/}

                <Route path={[
                    "/courses/editor/:courseId",
                    "/courses/editor/:courseId/:moduleId",
                    "/courses/editor/:courseId/:moduleId/:lessonId"]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager