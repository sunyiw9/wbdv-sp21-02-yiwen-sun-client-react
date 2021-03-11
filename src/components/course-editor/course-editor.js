import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
            <div>

                    <i onClick={() => history.goBack()}
                       className="fas fa-times fa-3x float-left"></i>
                    <h1>Course Editor
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h1>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                    </div>

                </div>
            </div>
        </Provider>)}

export default CourseEditor