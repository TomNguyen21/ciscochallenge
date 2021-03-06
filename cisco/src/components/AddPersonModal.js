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
        <label className={'labelName'}>Name</label>
        <input type="text" placeholder="Name" name="name" onChange={(e) => handleChange(e)}/>
        <label className={'labelName'}>Job Title</label>
        <input type="text" placeholder="Job Title" name="jobTitle" onChange={(e) => handleChange(e)}/>
        <label className={'labelName'}>Tenure</label>
        <input type="number" placeholder="Tenure" name="tenure" onChange={(e) => handleChange(e)}/>
        <label className={'labelName'}>Gender</label>
        <input type="option" placeholder="Gender" name="gender" onChange={(e) => handleChange(e)}/>
        <div className={"Modal-Buttons"}>
          <button className={"form-button1"} type="submit" value="Submit">Add Person</button>
          <button className={"close-button"} type="button" onClick={() => props.onClose()}>Close</button>
        </div>
      </div>
    </form>
  )

}

export default Modal;

// onClick={() => {props.addPerson(newPerson);console.log(newPerson);}}