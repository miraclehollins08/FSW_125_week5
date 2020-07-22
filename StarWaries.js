import React, { useState } from 'react'
import AddStarWariesForm from './AddStarWariesForm.js'

export default function StarWaries(props){
    const { title, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="starwaries">
            { !editToggle ?
            <>
                <h1>Title: { title }</h1> 
                <p>Type: { type }</p>
                <button
                        onClick={() => props.deleteStarWaries(_id)}>
                        Delete
                        </button>
                        <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                        </button>
                    </>
                    :
                    <>
                        <AddStarWariesForm 
                        title={title}
                        type={type}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editStarWaries}
                        />
                        <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                        </button>
                    </>
            }
        </div>
    )
}