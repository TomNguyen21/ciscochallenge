import React, { useState } from "react";


let Modal = (props) => {
  let [newPerson, setNewPerson] = useState({
    name: '',
    jobTitle: '',
    tenure: 0,
    gender: '',
  });

  let handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setNewPerson({...newPerson, [e.target.name]: e.target.value})
    console.log(newPerson)
  }

  if (!props.show) return null;
  return (
    <form className={"Modal"}>
      <div className={'Form'}>
        <label>Name</label>
        <input type="text" name="name" onChange={(e) => handleChange(e)}/>
        <label>Job Title</label>
        <input type="text" name="jobTitle" onChange={(e) => handleChange(e)}/>
        <label>Tenure</label>
        <input type="number" name="tenure" onChange={(e) => handleChange(e)}/>
        <label>Gender</label>
        <input type="text" name="gender" onChange={(e) => handleChange(e)}/>
        <div className={"Modal-Buttons"}>
          <button className={"Add-Person"} type="button" onClick={() => {props.addPerson(newPerson);console.log(newPerson); props.onClose()}}>Add Person</button>
          <button className={"Add-Person"} type="button" onClick={() => props.onClose()}>Close</button>
        </div>
      </div>
    </form>
  )

}

export default Modal;