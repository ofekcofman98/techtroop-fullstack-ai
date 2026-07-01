const List = ({ names, onClick }) => { //! idx?
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {names.map((name) => (
                <button 
                    key={name}
                    onClick={() => onClick(name)}
                >
                        {name}
                </button>
            ))}
        </div>
    )
}

export default List;