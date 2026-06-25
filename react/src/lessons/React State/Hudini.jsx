import { useState } from "react";

const Hudini = () => {
    const [show, setShow] = useState(false);

    const ToggleShow = () => setShow(!show);

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '15px', border: '1px solid purple' }}>
            <div>{show ? "Now you see me" : "Now you don't" }</div>
            <button onClick={ToggleShow}>
                Hudini!
            </button>
        </div>
    )
};

export default Hudini;