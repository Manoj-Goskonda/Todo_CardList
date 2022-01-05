import React from "react";
import { useState } from "react/cjs/react.development";

const TileView = (props) => {
  return (
    <>
      <form xs="6" sm="6" className="mt-3">
          {props.formData.map((item) => {
            return (
              <>
                <div
                  className="m-2 card card_data"
                  style={{
                    height: "150px",
                    width: "30%",
                    borderRadius: "20px",
                    backgroundColor: "#7daaec",
                  }}
                >
                  <div className="card-body">
                    <p className="card-title">Name: {item.name}</p>
                    <p className="card-title">
                      Designation: {item.designation}
                    </p>
                    <p className="card-title">Calender: {item.Calendar}</p>
                    <p className="card-title">Age: {item.age}</p>
                  </div>
                </div>
              </>
            );
          })}
      </form>
    </>
  );
};

export default TileView;
