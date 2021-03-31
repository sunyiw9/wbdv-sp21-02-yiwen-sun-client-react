import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        deleteImage,
        updateImage,
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(widget)
    return(
        <>
            {
                !editing &&
                <>
                    <img width={widget.width} height={widget.height} src={widget.src}/>
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
                    Image URL
                    <input
                        onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                src: e.target.value
                            })}
                        value={cachedItem.src}
                        className="form-control"/>
                        Image width
                    <input
                        onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                width: e.target.value
                            })}
                        value={cachedItem.width} className="form-control"/>
                        Image height
                    <input
                        onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                height: e.target.value
                            })}
                        value={cachedItem.height} className="form-control"/>

                    <i onClick={() => {
                        setEditing(false)
                        updateImage(cachedItem)
                    }} className="fas fa-check"></i>
                    <i onClick={()=> deleteImage(widget)} className="fas fa-trash"></i>
                </>
            }
        </>
    )
}

export default ImageWidget