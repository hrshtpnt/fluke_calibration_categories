import React from "react";
import TableData from "./components/TableData/tableData.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">FLUKE MULTIFUNCTION CALIBRATORS</header>
      <section>
        <TableData />
      </section>
      <footer>
        <p>Author: Harshit Pant</p>
        <p>
          <a href="mailto:hrshtpnt@gmail.com">hrshtpnt@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
