import React, { useState } from "react";
import ModalHeader from "./ModalTitle";
import ModalBody from "./ModalBody";

const Modal = ({ modalButtonTitle, transaction, setTransaction }) => {
  const [page, setPage] = useState(1);

  return (
    <>
      {/* <!-- Modal --> */}
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#transactionModal"
      >
        {modalButtonTitle}
      </button>

      <div
        className="modal fade"
        data-backdrop="static"
        data-keyboard="false"
        id="transactionModal"
        tabIndex="-1"
        aria-labelledby="transactionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader
              transaction={transaction}
              setTransaction={setTransaction}
              setPageNo={setPage}
            />

            <ModalBody
              transaction={transaction}
              setTransaction={setTransaction}
              pageNo={page}
              setPageNo={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
