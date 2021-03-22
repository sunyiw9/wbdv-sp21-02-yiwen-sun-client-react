import React, {useState} from 'react'
import ParagraphWidget from "./paragraph-widget";

const HeadingWidget = (
    {
        widget,
        deleteHeading,
        updateHeading,
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(widget)
    return(
        <>
            {
                !editing &&
                    <>
                        {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                        {(widget.size === 1 || widget.size === "1") && <h1>{widget.text}</h1>}
                        {(widget.size === 2 || widget.size === "2") && <h2>{widget.text}</h2>}
                        {(widget.size === 3 || widget.size === "3") && <h3>{widget.text}</h3>}
                        {(widget.size === 4 || widget.size === "4") && <h4>{widget.text}</h4>}
                        {(widget.size === 5 || widget.size === "5") && <h5>{widget.text}</h5>}
                        {(widget.size === 6 || widget.size === "6") && <h6>{widget.text}</h6>}
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
                        </select>
                        <input
                            onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                text: e.target.value
                            })}
                            value={cachedItem.text} className="form-control"/>
                        <select
                            onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                size : e.target.value
                            })}
                            value={cachedItem.size} className="form-control">
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                        <i onClick={() => {
                        setEditing(false)
                        updateHeading(cachedItem)
                        }} className="fas fa-check"></i>
                        <i onClick={()=> deleteHeading(widget)} className="fas fa-trash"></i>
                    </>
            }
        </>
        /*
        <>
            {
                editing &&
                <>
                    <input value={widget.text} className="form-control"/>
                    <select value={widget.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
            }
            {
                !editing &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
         */
    )
}
export default HeadingWidget