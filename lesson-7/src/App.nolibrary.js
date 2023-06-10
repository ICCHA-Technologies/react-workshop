import './App.css';
import { useState } from 'react'
import FormField from './components/FormField';

// Validate email regex: !/^\S+@\S+$/.test(str)

function App() {
  const [values, setValues] = useState({ name: '', email: '', age: '' })
  const [errors, setErrors] = useState({ name: null, email: null, age: null })

  const validateForm = () => {
    let newErrors = { name: null, email: null, age: null }

    if (!values.name) {
      newErrors.name = 'Name is Required'
    }

    if (!values.email) {
      newErrors.email = 'Email is Required'
    } else if (!/^\S+@\S+$/.test(values.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!values.age) {
      newErrors.age = 'Age is Required'
    } else if (values.age < 18) {
      newErrors.age = 'You must be at least 18'
    }

    setErrors(newErrors)
  }

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
    // switch (target.name) {
    //   case "name":
    //     setValues({
    //       ...values,
    //       name: target.value
    //     })
    //     break;
    //   case "email":
    //     setValues({
    //       ...values,
    //       email: target.value
    //     })
    //     break;
    //   case "age":
    //     setValues({
    //       ...values,
    //       age: target.value
    //     })
    //     break;
    
    //   default:
    //     break;
    // }
  }

  console.log(values)

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(event) => {
          event.preventDefault()
          validateForm()
        }}>
          <FormField
            label="Name"
            type="text"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
          />

          <FormField
            label="Email"
            type="email"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />

          <FormField
            label="Age"
            type="number"
            name="age"
            value={values.age}
            error={errors.age}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
