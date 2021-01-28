import React from "react";

function ChatArea() {
  return (
    <React.Fragment>
      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          <div
            className="card  float-end d-flex justify-content-end bd-highlight"
            style={{ maxWidth: 800 }}
          >
            <div className="row g-0 bd-highlight">
              <div className="col-10">
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.This is a wider card with supporting text below as a
                    natural lead-in to additional
                  </p>
                  <p className="card-text text-end ">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-2 justify-content-center text-center mt-3 mb-4">
                <img
                  style={{
                    height: "80%",
                    width: "70%",
                    borderRadius: "10%",
                  }}
                  src="https://www.gendruk.com/wp-content/uploads/2015/11/kucing-lucu.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row bd-highlight">
        <div className="p-2 bd-highlight">
          <div
            className="card  float-end d-flex bd-highlight"
            style={{ maxWidth: 800 }}
          >
            <div className="row g-0 bd-highlight">
              <div className="col-2 justify-content-center text-center mt-3 mb-4">
                <img
                  style={{
                    height: "80%",
                    width: "70%",
                    borderRadius: "10%",
                  }}
                  src="https://www.gendruk.com/wp-content/uploads/2015/11/kucing-lucu.jpg"
                  alt="..."
                />
              </div>
              <div className="col-10">
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.This is a wider card with supporting text below as a
                    natural lead-in to additional
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ChatArea;
