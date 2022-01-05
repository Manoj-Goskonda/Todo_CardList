import React, { useState } from "react";

const FormAdd = (props) => {
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState();
  const [designation, setDesignation] = useState();
  const [Calendar, setCalendar] = useState();
  const [age, setAge] = useState();
  const [formAdd, setFromAdd] = useState(false);
  const [numMulValue, setMulValue] = useState();

  const handleChangeName = (event) => {
    // let updatedVal = formData;
    // updatedVal[index] = { ...updatedVal[index], name: event.target.value };
    // setFormData(updatedVal);
    setName(event.target.value);
    console.log("Name ========>", event.target.value);
    // setMulValue(event.target.value);
    // event.preventDefault();
  };

  const handleChangeDesignation = (event) => {
    // let updatedVal = formData;
    // updatedVal[index] = { ...updatedVal[index], designation: event.target.value };
    // setFormData(updatedVal);
    setDesignation(event.target.value);
    console.log("Designation ========>", event.target.value);
    // setMulValue(event.target.value);
    // event.preventDefault();
  };

  const handleChangeCalendar = (event) => {
    // let updatedVal = formData;
    // updatedVal[index] = { ...updatedVal[index], Calendar: event.target.value };
    // setFormData(updatedVal);
    setCalendar(event.target.value);
    console.log("Calendar ========>", event.target.value);
    // setMulValue(event.target.value);
    // event.preventDefault();
  };

  const handleChangeAge = (event) => {
    // let updatedVal = formData;
    // updatedVal[index] = { ...updatedVal[index], age: event.target.value };
    // setFormData(updatedVal);
    setAge(event.target.value);
    console.log("Age ========>", event.target.value);
    // setMulValue(event.target.value);
    // event.preventDefault();
  };

  const resetInputField = () => {
    setMulValue(" ");
  };

  const [hide, setHide] = useState(true);

  const sendtocardClick = (event) => {
    // console.log(event, index);
    console.log(name, designation, Calendar, age);
    let updatedFormData = props.formData;
    updatedFormData.push({ name, designation, Calendar, age});
    props.setFormData(updatedFormData);
    setFromAdd(false);
    resetForm();
    props.getDataSend(name, designation, Calendar, age);
    setHide(false);
    event.preventDefault();
  };
  const resetForm = () => {
    setName("");
    setDesignation("");
    setCalendar("");
    setAge("");
  };
  const addMultipleForm = () => {
    console.log("click");
    setFromAdd(true);
    // setFormData([
    //   ...formData,
    //   { name: "", designation: "", Calendar: "", age: "" },
    // ]);
  };

  return (
    <>
      <div className="col-md-12 gap-2 d-md-flex justify-content-md-end add_new_style">
        <button
          className="btn btn-primary me-md-2 add_new"
          type="submit"
          onClick={(e) => {
            addMultipleForm();
          }}
        >
          Add New
        </button>
      </div>
      {formAdd && (
        <form className="row g-0" style={{ justifyContent: "end" }}>
          {/* {console.log(formData)}
        {formData.map((item, index) => { */}
          {/* return ( */}
          <div className="col-md-12 form_main" style={{ marginTop: "10px" }}>
            <div className="col-md-12 mt-2 form_data">
              <div className="col-md-3">
                <label htmlFor="name">Name</label>
                <input
                  className="input"
                  type="text"
                  style={{ marginLeft: "10px" }}
                  value={name}
                  onChange={(e) => handleChangeName(e)}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="designation">Designation</label>
                <input
                  className="input"
                  type="text"
                  value={designation}
                  onChange={(e) => handleChangeDesignation(e)}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-12 mt-2 mb-2 form_data">
              <div className="col-md-4">
                <label
                  htmlFor="date"
                  style={{ marginLeft: "2px", paddingRight: "9px" }}
                >
                  Joining Date
                </label>
                <input
                  className="input1"
                  type="date"
                  style={{ paddingRight: "8px" }}
                  value={Calendar}
                  onChange={(e) => handleChangeCalendar(e)}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="age">Age</label>
                <input
                  className="input1"
                  type="number"
                  value={age}
                  onChange={(e) => handleChangeAge(e)}
                  required
                />
              </div>
            </div>
            <div
              className="mb-2"
              style={{ textAlignLast: "right", marginRight: "10px" }}
            >
              <button
                className="btn btn-primary me-md-2 save"
                type="submit"
                onClick={(e) => sendtocardClick(e)}
              >
                Save
              </button>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={resetForm}
                style={{ backgroundColor: "orange" }}
              >
                Cancel
              </button>
            </div>
          </div>
          {/* ); */}
          {/* })} */}
        </form>
      )}
    </>
  );
};

export default FormAdd;
