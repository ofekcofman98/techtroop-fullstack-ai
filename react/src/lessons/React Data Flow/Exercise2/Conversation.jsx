const Conversation = ({ sender, convo, onClick }) => {
    return (
        <div>            
            <button 
                onClick={onClick}
            >
                Back
            </button>
            {convo.map((message, index) => {
                const isSelf = message.sender === "self";
                return(
                    <div key={index}>
                        <span><strong>{message.sender}</strong>: </span>
                        <span>{message.text}</span>
                    </div>
                );
            })};
        </div>
    )
};

export default Conversation;