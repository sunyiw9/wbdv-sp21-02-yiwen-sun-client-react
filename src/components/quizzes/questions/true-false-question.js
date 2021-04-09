import React,{useState}  from "react";

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    return(
        <div>
            <h5>{question.question}</h5>
            <ul className="list-group">
                <li className="list-group-item"><label><input type="radio" name={question._id}/> True</label></li>
                <li className="list-group-item"><label><input type="radio" name={question._id}/> False</label></li>
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button type="button" className="btn btn-success">Grade</button>
        </div>
    )
}

export default TrueFalseQuestion