import { useState } from "react";
import { RadioGroup } from "./radiogroup/RadioGroup";

function App() {
  const [data, setData] = useState({
    meal: "",
    bread: "",
    side: "",
    beverage: "",
  });
  const onChange = (name) => (value) => setData({ ...data, [name]: value });

  return (
    <main>
      {JSON.stringify(data)}
      <h1>Breakfast order form</h1>
      <h2>Meal</h2>
      <RadioGroup name="meal" onChange={onChange("meal")}>
        <RadioGroup.Option value="small">Small: $5.99</RadioGroup.Option>
        <RadioGroup.Option value="medium">Small: $7.99</RadioGroup.Option>
        <RadioGroup.Option value="large">Large: $9.99</RadioGroup.Option>
      </RadioGroup>
      <h2>Bread</h2>
      <RadioGroup name="bread" onChange={onChange("bread")}>
        <RadioGroup.Option value="bagel">Bagel</RadioGroup.Option>
        <RadioGroup.Option value="roll">Roll</RadioGroup.Option>
        <RadioGroup.Option value="croissant" isPopular>
          Croissant
        </RadioGroup.Option>
      </RadioGroup>
      <h2>Sides</h2>
      <RadioGroup name="side" onChange={onChange("side")}>
        <RadioGroup.Option value="avocado" icon="🥑">
          Avocado
        </RadioGroup.Option>
        <RadioGroup.Option value="bacon" icon="🥓">
          Bacon <em>(+ $0.99)</em>
        </RadioGroup.Option>
      </RadioGroup>
      <h2>Beverages</h2>
      <RadioGroup name="beverage" onChange={onChange("beverage")}>
        <RadioGroup.Option value="orangejuice">Orange Juice</RadioGroup.Option>
        <RadioGroup.Option value="coffee">
          Coffee
          <RadioGroup.Details>
            <select name="coffee_size">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </RadioGroup.Details>
        </RadioGroup.Option>
      </RadioGroup>
    </main>
  );
}

export default App;
