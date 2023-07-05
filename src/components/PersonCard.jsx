import React, {useState} from 'react'
import '../App.css';

const PersonCard = (props) => {
    
    const {first_name, last_name, hair_color} = props
    // moved age value to be handled with state
    const [age, setAge] = useState(props.age)

    const birthday = () => {
        setAge(age+1);
    }
    
    return (
        <>
        <h1>{last_name} {first_name}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hair_color}</p>
        <button onClick={birthday}>Birthday Button for {first_name} {last_name}</button>
        </>
    )
}

export default PersonCard