import { useContext } from "react";
import { RadioGroupContext, RadioOptionContext } from "./contexts";

export function Option({ value, icon, isPopular, children }) {
  const { name, selectedValue, onChange } = useContext(RadioGroupContext);
  const isSelected = selectedValue === value;
  return (
    <label style={isPopular ? { border: "1px dashed red" } : null}>
      {icon}
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
      />
      <RadioOptionContext.Provider value={isSelected}>
        {children}
      </RadioOptionContext.Provider>
      {isPopular ? <strong>🔥 Popular!</strong> : null}
    </label>
  );
}
