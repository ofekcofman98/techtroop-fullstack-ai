import React, { useState, useEffect } from 'react';

const Exercise1 = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return(() => clearInterval(intervalId));
    }, [])
    
    return (
        <div>
            <h1 style={{ fontSize: '3rem', color: '#007bff' }}>{time}</h1>
        </div>
    )
}

export default Exercise1;