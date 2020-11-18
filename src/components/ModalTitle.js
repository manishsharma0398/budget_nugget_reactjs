import React from "react";

const ModalHeader = ({ transaction, setTransaction, setPageNo }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="transactionModalLabel">
        Add{" "}
        {transaction &&
          transaction.charAt(0).toUpperCase() +
            transaction.substr(1, transaction.length)}
        {!transaction && "Transaction"}
      </h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={() => {
          setTransaction("");
          setPageNo(1);
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ModalHeader;
