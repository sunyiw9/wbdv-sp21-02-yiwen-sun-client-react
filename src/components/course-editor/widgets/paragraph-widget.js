import React from 'react'
import HeadingWidget from "./heading-widget";

const ParagraphWidget = ({widget, editing}) => {
    return(
        <>
            {
                editing &&
                <>
                    <textarea value={widget.text} className="form-control"></textarea>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget