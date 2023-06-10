import './App.css';
import { useForm } from 'react-hook-form'


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name {' '}</label>
            <input {...register("name", { required: "Name is required" })} />
            {errors.name && <small style={{color: 'red'}}>{errors.name.message}</small>}
          </div>

          <div>
            <label>Email {' '}</label>
            <input {...register("email", { required: "Email is required" })} />
            {errors.email && <small style={{color: 'red'}}>{errors.email.message}</small>}
          </div>

          <div>
            <label>Age {' '}</label>
            <input {...register("age", { required: "Age is required", min: { value: 18, message: "You must be 18 at least"} })} />
            {errors.age && <small style={{color: 'red'}}>{errors.age.message}</small>}
          </div>
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
