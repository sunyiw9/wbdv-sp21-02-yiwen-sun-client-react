import React,{useState}  from "react";

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")

    return(
        <div>
            <h5>{question.question}
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
                    <>
                        <li className="list-group-item"><label><input
                            onClick={() => {setYourAnswer("true")}} type="radio" name={question._id}/> True</label></li>
                        <li className="list-group-item"><label><input
                            onClick={() => {setYourAnswer("false")}}type="radio" name={question._id}/> False</label></li>
                    </>
                }
                {
                    correctAnswer !== "" &&
                    <>
                        {
                            yourAnswer === question.correct && yourAnswer === "true" &&
                            <>
                            <li className="list-group-item list-group-item-success">
                                <label><input
                                    onClick={() => {setYourAnswer("true")}}
                                    type="radio"
                                    name={question._id}
                                    checked="checked"/> True</label>
                                <i className="fas fa-check float-right"></i>
                            </li>
                                <li className="list-group-item"><label><input
                                    onClick={() => {setYourAnswer("false")}} type="radio" name={question._id}/> False</label>
                                </li>
                            </>
                        }
                        {
                            yourAnswer === "true" && yourAnswer !== question.correct &&
                            <>
                                <li className="list-group-item list-group-item-danger">
                                    <label><input
                                        onClick={() => {setYourAnswer("true")}}
                                        type="radio"
                                        name={question._id}
                                        checked="checked"/> True</label>
                                        <i className="fas fa-times float-right"></i>
                                </li>
                                <li className="list-group-item list-group-item-success"><label><input
                                    onClick={() => {setYourAnswer("false")}} type="radio" name={question._id}/> False</label>
                                    <i className="fas fa-check float-right"></i>
                                </li>
                            </>
                        }
                        {
                            yourAnswer === "false" && yourAnswer !== question.correct &&
                            <>
                                <li className="list-group-item list-group-item-success">
                                    <label><input
                                        onClick={() => {setYourAnswer("true")}}
                                        type="radio"
                                        name={question._id}/> True</label>
                                    <i className="fas fa-check float-right"></i>
                                </li>
                                <li className="list-group-item list-group-item-danger"><label><input
                                    onClick={() => {setYourAnswer("false")}}
                                    type="radio" name={question._id}
                                    checked="checked"/> False</label>
                                    <i className="fas fa-times float-right"></i>
                                </li>
                            </>
                        }
                        {
                            yourAnswer === question.correct && yourAnswer === "false" &&
                            <>
                                <li className="list-group-item">
                                    <label><input
                                        onClick={() => {setYourAnswer("true")}}
                                        type="radio"
                                        name={question._id}
                                        checked="checked"/> True</label>
                                </li>
                                <li className="list-group-item list-group-item-success"><label><input
                                    onClick={() => {setYourAnswer("false")}}
                                    type="radio"
                                    name={question._id}
                                    checked="checked"/> False</label>
                                    <i className="fas fa-check float-right"></i>
                                </li>
                            </>
                        }
                    </>
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button onClick={() => {
                setCorrectAnswer(question.correct)
            }} type="button" className="btn btn-success">Grade</button>
        </div>
    )
}

export default TrueFalseQuestion