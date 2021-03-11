import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopicForLesson,
        deleteTopic,
        updateTopic
    }) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    useEffect(() => {
        // console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
        <div>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav-item">
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                item={topic}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        // console.log(moduleId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    deleteTopic: (item) =>
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            })),
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
    createTopicForLesson: (lessonId) => {
        // console.log("CREATE LESSON FOR MODULE: " + moduleId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)