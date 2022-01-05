import React, { useState } from "react";
import FormAdd from "./FormAdd";
import TileView from "./TileView";

const FormData = () => {
  // const [showcode, setshowcode] = useState(false);

  //    const sendtoparent = (index) => {
  //    setshowcode(index);
  //   }

  const [sendDataTileView, setsendDataTileView] = useState({});
  const [formData, setFormData] = useState([
    { name: "test1", designation: "FED", Calendar: "2021-09-01", age: "10" },
    { name: "test2", designation: "AWS", Calendar: "2021-09-02", age: "45" },
  ]);

  const getDataSend = (name, designation, Calendar, age) => {
    console.log(
      "inside Parent ===============>",
      name,
      designation,
      Calendar,
      age
    );
    let dataobj = {};
    dataobj.name = name;
    dataobj.designation = designation;
    dataobj.Calendar = Calendar;
    dataobj.age = age;
    setsendDataTileView(dataobj);
  };

  return (
    <>
      <div className="container">
        {/* <div className="col-md-12 gap-2 d-md-flex justify-content-md-end add_new_style">
          <button className="btn btn-primary me-md-2 add_new" type="submit" >
            Add New
          </button>
        </div> */}
        <FormAdd
          getDataSend={getDataSend}
          formData={formData}
          setFormData={setFormData}
        />
        <TileView sendDataTileView={sendDataTileView} formData={formData} />
      </div>
    </>
  );
};

export default FormData;
