import React, {useState} from 'react'
import HeadingWidget from "./heading-widget";

const ParagraphWidget = (
    {
        widget,
        deleteParagraph,
        updateParagraph,
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(widget)
    return(
        <>
            {
                !editing &&
                <>
                <p>
                    {widget.text}
                </p>
                <i onClick={()=>setEditing(true)} className="fas fa-cog"></i>
                </>

            }
            {
                editing &&
                <>
                    <select onChange={(e) =>
                        setCahedItem({
                            ...cachedItem,
                            type : e.target.value
                        })}
                            value={cachedItem.type} className="form-control">
                        <option>HEADING</option>
                        <option>PARAGRAPH</option>
                        <option>IMAGE</option>
                        <option>LIST</option>
                    </select>

                    <textarea
                        onChange={(e) =>
                        setCahedItem({
                            ...cachedItem,
                            text: e.target.value
                        })}
                        value={cachedItem.text} className="form-control"></textarea>
                    <i onClick={() => {
                        setEditing(false)
                        updateParagraph(cachedItem)
                    }} className="fas fa-check"></i>

                    <i onClick={() => deleteParagraph(widget)} className="fas fa-trash"></i>
                </>
            }
        </>
        /*
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

         */
    )
}

export default ParagraphWidget