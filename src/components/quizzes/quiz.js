import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/question-service"

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {

        fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])

    return(
        <div>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;