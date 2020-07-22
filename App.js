import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StarWaries from './components/StarWaries.js'
import AddStarWariesForm from './components/AddStarWariesForm.js'


export default function App(){
    const [starwaries, setStarWaries] = useState([])

    function getStarWaries(){
        axios.get("/starwaries")
        .then(res => setStarWaries(res.data))
        .catch(err => console.log(err))
    }

    function addStarWaries(newStarWaries){
        axios.post("/starwaries", newStarWaries)
        .then(res => {
            setStarWaries(preStarWaries => [...preStarWaries, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteStarWaries(StarWariesId){
        axios.delete(`/starwaries/${StarWariesId}`)
        .then(res => {
            setStarWaries(preStarWaries => preStarWaries.filter(StarWaries => StarWaries._id !== StarWariesId))
        })
        .catch(err => console.log(err))
    }

    function editStarWaries(updates, StarWariesId){
        axios.put(`/starwaries/${StarWariesId}`, updates)
        .then(res => {
            setStarWaries(preStarWaries => preStarWaries.map(StarWaries => StarWaries._id !== StarWariesId ? StarWaries : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getStarWaries()
    }, [])

    return (
        <div>
            <div className="starwaries-container">
                <AddStarWariesForm 
                submit={addStarWaries}
                btnText="Add StarWaries"
                />
            { 
            starwaries.map(starwaries => 
                <StarWaries 
                    {...starwaries} 
                    key={starwaries.title}
                    deleteStarWaries={deleteStarWaries}
                    editStarWaries={editStarWaries}/>)
            }
        </div>
        </div>
    )
}