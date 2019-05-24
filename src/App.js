import React from "react";
import "./App.css";
import Customer from "./components/Customer";
const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "Jung Ik",
    birthday: "920311",
    gender: "Male",
    job: "Developer"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "Jony",
    birthday: "920311",
    gender: "Male",
    job: "Developer"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "Juan",
    birthday: "920311",
    gender: "Male",
    job: "Developer"
  }
];
class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              id={c.id}
              key={c.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
