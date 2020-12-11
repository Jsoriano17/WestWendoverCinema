import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Something = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/values").then(res => {
            setValues(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    , [])

    return (
        <div>
            {values.map(value => (
                <ul key={value.id}>
                    <li>{value.id}</li>
                    <li>{value.name}</li>
                </ul>
            ))}
        </div>
    )
}

export default Something
