import { useState } from "react";

interface FormTypes {
        username: string,
        goals: string,
        age:  string
}


function NewForm() {
  const [inputs, setInputs] = useState<FormTypes>({
        username: '',
        goals: '',
        age: ''
  });

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
}

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`you entered the name ${inputs.username}`)

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name='username'
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Goals
        <input 
        type="text"
        name='goals'
        value={inputs.goals || ''}
        onChange={handleChange} />
      </label>
      <label>
        Age
        <input 
        type="number"
        name='age'
        value={inputs.age || ''}
        onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default NewForm;
