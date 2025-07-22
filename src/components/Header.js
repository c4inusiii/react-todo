import Input from "./Input";
import AddButton from "./AddButton";
import React from "react";

function Header({placeholder, onAddTask}) {
  const [inputValue, setInputValue] = React.useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    } else {
      alert("Please enter task name");
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <AddButton onClick={handleAddTask} />
      </div>
    </header>
  );
}
export default Header;
