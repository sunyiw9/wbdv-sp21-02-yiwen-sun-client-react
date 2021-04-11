import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    return (
        <div>
            <h5>
                {question.question}
                {
                    correctAnswer && question.correct === yourAnswer &&
                    <i className="fas fa-check"></i>
                }
                {
                    correctAnswer && question.correct !== yourAnswer &&
                    <i className="fas fa-times"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    correctAnswer === "" &&
                    question.choices.map((choice) => {
                        return (
                            <li className="list-group-item">
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>
                        )
                    })
                }
                {
                    correctAnswer !== "" &&
                    question.choices.map((choice) => {
                        if (choice === question.correct) {
                            if (yourAnswer === choice) {
                                return (
                                    <li className="list-group-item list-group-item-success">
                                        <label><input
                                            onClick={() => {
                                                setYourAnswer(choice)
                                            }}
                                            type="radio"
                                            name={question._id}
                                            checked="checked"/> {choice}</label>
                                        <i className="fas fa-check float-right"></i>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="list-group-item list-group-item-success">
                                        <label><input
                                            onClick={() => {
                                                setYourAnswer(choice)
                                            }}
                                            type="radio"
                                            name={question._id}/> {choice}</label>
                                        <i className="fas fa-check float-right"></i>
                                    </li>
                                )

                            }
                        } else {
                            if (yourAnswer === choice) {
                                return (
                                    <li className="list-group-item list-group-item-danger">
                                        <label><input
                                            onClick={() => {
                                                setYourAnswer(choice)
                                            }}
                                            type="radio"
                                            name={question._id}
                                            checked="checked"/> {choice}</label>
                                        <i className="fas fa-times float-right"></i>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="list-group-item">
                                        <label><input
                                            onClick={() => {
                                                setYourAnswer(choice)
                                            }}
                                            type="radio"
                                            name={question._id}/> {choice}</label>
                                    </li>
                                )
                            }
                        }
                    })
                }
            </ul>

            {/*
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>
                        )
                    })
              */}
            <p>
                Your answer: {yourAnswer}
            </p>
            <button onClick={() => {
                setCorrectAnswer(question.correct)
            }} type="button" className="btn btn-success">Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion