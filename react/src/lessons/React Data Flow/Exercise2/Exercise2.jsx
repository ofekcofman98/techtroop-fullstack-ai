import { useState } from "react";
import { data } from "./data";
import List from "./List";
import Conversation from "./Conversation";

const Exercise2 = () => {
    const [state, setState] = useState(data);

    const displayConversation = (name) => {
        setState(prevState => ({
            ...prevState,
            displayConversation: name
        }));
    };

    const goBack = () => {
        setState(prevState => ({
            ...prevState,
            displayConversation: null
        }));
    };


    const handleClickName = (name) => {
        displayConversation(name);
    };

    const contacts = data.conversations.map(conv => conv.with);
    
    return (
        <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>            
            {state.displayConversation === null ? (
                <List 
                    names={contacts}
                    onClick={handleClickName}
                />                      
            ) : (
                <Conversation
                    sender={state.displayConversation}
                    convo={state.conversations.find(c => c.with === state.displayConversation).convo}
                    onClick={goBack}
                />
            )}
        </div>
    )
};

export default Exercise2;