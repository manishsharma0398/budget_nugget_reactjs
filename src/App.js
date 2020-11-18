import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [selectedTransaction, setSelectedTransaction] = useState("");

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <Modal
          modalButtonTitle="Add Transaction"
          transaction={selectedTransaction}
          setTransaction={setSelectedTransaction}
        />
      </div>
    </div>
  );
};

export default App;
