import React, { useState } from "react";


let Modal = (props) => {
  let [newPerson, setNewPerson] = useState({
    name: '',
    jobTitle: '',
    tenure: 0,
    gender: '',
  });


  let handleChange = (e) => {
    setNewPerson({...newPerson, [e.target.name]: e.target.value})
  }

  let handleSubmit = (e) => {
    fetch('/addemployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPerson)
    })
      .then((res) => res.json())
      .then((data) => console.log('Success:', data))
      .catch((err) => console.error('Failed:', err));
  }

  if (!props.show) return null;
  return (
    <form className={"Modal"} onSubmit={handleSubmit}>
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
          <button className={"form-button1"} type="submit" value="Submit">Add Person</button>
          <button className={"form-button1"} type="button" onClick={() => props.onClose()}>Close</button>
        </div>
      </div>
    </form>
  )

}

export default Modal;

// onClick={() => {props.addPerson(newPerson);console.log(newPerson);}}