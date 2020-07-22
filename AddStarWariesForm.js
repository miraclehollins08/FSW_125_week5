import React, { useState } from 'react'

export default function AddstarwariesForm(props){
    const initInputs = { title: props.title || "", type: props.type || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="title" 
            value={inputs.title} 
            onChange={handleChange} 
            placeholder="Title"/>
            <input 
            type="text" 
            name="type" 
            value={inputs.type} 
            onChange={handleChange} 
            placeholder="Type"/>
            <button>{ props.btnText }</button>
        </form>
    )
}