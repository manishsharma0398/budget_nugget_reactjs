import React from "react";

const data = [
  { imageName: "income.svg", transactionType: "Income" },
  { imageName: "expense.svg", transactionType: "Expense" },
];

const ModalBody = ({ setTransaction, transaction, pageNo, setPageNo }) => {
  return (
    <div className="modal-body">
      {pageNo === 1 && (
        <>
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/images/transaction.jpg"}
            alt=""
          />

          <p className="">What kind of transaction it is?</p>

          <div className="row">
            <div className="col-1"></div>
            {data.map((d, index) => (
              <React.Fragment key={index}>
                {index === 1 && <div className="col"></div>}
                <div
                  key={index}
                  className={
                    "col-4 transacts" +
                    `${
                      d.imageName.split(".")[0] === transaction
                        ? " selected"
                        : ""
                    }`
                  }
                >
                  <div
                    style={{ cursor: "pointer" }}
                    id={d.imageName.split(".")[0]}
                    onClick={(e) => {
                      const transaction = d.imageName.split(".")[0];
                      setTransaction(transaction);

                      if (!e.target.classList.contains("col-4")) {
                        const d = document.querySelectorAll(".col-4");

                        d.forEach((e) => {
                          if (e.classList.contains("selected")) {
                            e.classList.remove("selected");
                          }
                        });
                      }
                    }}
                    className="shadow-lg pl-4 pb-3"
                  >
                    <img
                      className="py-3"
                      src={process.env.PUBLIC_URL + "/images/" + d.imageName}
                      alt={d.imageName}
                    />
                    <p className="transaction">{d.transactionType}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
            <div className="col-1"></div>
          </div>
        </>
      )}

      {pageNo === 2 && (
        <>
          <div className="row">
            <div className="col-2">
              <img
                src={process.env.PUBLIC_URL + "/images/" + transaction + ".svg"}
                alt=""
              />
            </div>
            <div className="col">
              <span className="mb-0 d-block">Transaction Type</span>
              <p className="mb-0 font-secular">
                {transaction.charAt(0).toUpperCase() +
                  transaction.substr(1, transaction.length)}
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-2">
              <img
                src={process.env.PUBLIC_URL + "/images/" + transaction + ".svg"}
                alt=""
              />
            </div>
            <div className="col">
              <span className="mb-0 d-block">Transaction</span>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="row mt-3">
            <span className="text-secular d-block">Choose category</span>
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </>
      )}

      <div className="d-flex flex-row-reverse">
        <button
          disabled={!transaction}
          onClick={() => {
            setPageNo(2);
          }}
          id={pageNo}
          className="d-block btn btn-md btn-success mt-3 px-5"
          style={{ cursor: "pointer" }}
        >
          Next
        </button>

        {pageNo !== 1 && (
          <button
            onClick={() => {
              setPageNo(1);
            }}
            id={pageNo}
            className="d-block btn btn-md btn-success mt-3 px-5 mr-3"
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalBody;
