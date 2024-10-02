import { useState } from "react";
import "./App.css";
//import { Person } from "./components/Person";
import { People } from "./components/People";

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Ines Oliveros",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
    {
      id: 1,
      name: "David Romero",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 1,
      name: "Karen Steffany Colon ",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
  ]);

  return (
    <div>
      <People 
      people={people}
      setPeople={setPeople}
      />
    </div>
  );
}

export default App;
