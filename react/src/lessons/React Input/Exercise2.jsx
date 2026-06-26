import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const fruits = [
    { value: "banana", text: "Banana" },
    { value: "mango", text: "Mango" },
    { value: "apple", text: "Apple" }  
];
  
  const handleFruitSelection = (event) => {
    const selectedFruit = event.target.value;

    setFruit(selectedFruit);
    console.log(`${name} selected ${selectedFruit}`)
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        placeholder="your name..."
        value={name}
      />
      <select
        id="select-input"
        onChange={handleFruitSelection}
        value={fruit}
      >
        {fruits && fruits.map((f) => (
            <option 
                key={f.value} 
                value={f.value}
            >
                {f.text}
            </option>
        ))}
      </select>
    </div>
  );
};
export default Exercise2;
