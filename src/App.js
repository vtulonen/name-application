import React, { useState, useEffect } from "react";
import ListAll from "./Components/ListAll";
import ListNames from "./Components/ListNames";
import ToggleComponent from "./Components/ToggleComponent";
import NamesTotalAmount from "./Components/NamesTotalAmount";
import SearchNameAmount from "./Components/SearchNameAmount";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    //JSON properties to lowercase
    const lower = (obj) => {
      for (let prop in obj) {
        if (typeof obj[prop] === "string") {
          obj[prop] = obj[prop].toLowerCase();
        }
        if (typeof obj[prop] === "object") {
          lower(obj[prop]);
        }
      }

      return obj;
    };

    // Fetch names
    fetch("names.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setNames(lower(data.names)));
  }, []);

  return (
    <div className="app">
      <Header />

      <main className="components">
        <SearchNameAmount names={names} />

        <ToggleComponent
          btnText={"Totals"}
          toolTipText={"Total names"}
          component={<NamesTotalAmount names={names} />}
        />

        <ToggleComponent
          btnText={"List all"}
          toolTipText={"Names ordered by amount"}
          component={<ListAll names={names} />}
        />
        <ToggleComponent
          btnText={"List names"}
          toolTipText={"Ordered alphabetically"}
          component={<ListNames names={names} />}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
