import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        deleteList,
        updateList,
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(widget)
    return(
        <>
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

                        <input
                            onChange={(e) =>
                                setCahedItem({
                                    ...cachedItem,
                                    ordered: e.target.value

                                })
                            }
                            checked={cachedItem.ordered} type="checkbox"/> Ordered
                        <br/>
                        Item list
                        <textarea
                            onChange={(e) =>
                                setCahedItem({
                                    ...cachedItem,
                                    text: e.target.value
                                })}

                            value={cachedItem.text} rows={10} className="form-control"></textarea>


                        <i onClick={() => {
                            setEditing(false)
                            updateList(cachedItem)
                        }} className="fas fa-check"></i>
                        <i onClick={()=> deleteList(widget)} className="fas fa-trash"></i>
                    </>
            }
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                    <i onClick={()=>setEditing(true)} className="fas fa-cog"></i>
                </>
            }
        </>
    )
}

export default ListWidget