import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"

const QuizzesList = () => {
    const {courseId, quizId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        findAllQuizzes()
    }, [])

    const findAllQuizzes = () => {
        quizService.findAllQuizzes()
            .then((data) => {
                setQuizzes(data)
            })
    }

    /*
    useEffect(() => {

        fetch("http://localhost:4000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])

     */


    return(
        <div>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <li className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                    <button type="button" className="btn btn-primary float-right">Start</button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}


export default QuizzesList