import React from "react";
import Heading from "./Heading";
import Table from "./table/Table";

function App() {
  return (
    <div>
      <main role="main" className="col-md-9 mx-sm-auto col-lg-10 px-4">
        <Heading />
        <Table />

        <button type="button" className="btn btn-sm btn-outline-secondary">
          Save
        </button>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </main>
    </div>
  );
}

export default App;
