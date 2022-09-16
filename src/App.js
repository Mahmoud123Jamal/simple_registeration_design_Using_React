import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { fullname: "" , username: "", email: "", password: "" ,password1: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Fullname is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if(values.password !== values.password1 ) return alert( "password can't match" ) ;

   else if (!values.password1) {
      errors.password1 = "this field is required";
    }
    return errors;
  };

  return (
    <div >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed up successfully</div>
      ) : (
        <pre></pre>
      )}



    <form onSubmit={handleSubmit}>
<div id="header">SIGN UP</div> 
    <p id="s" >signup <br/>
<b> connect with us for Better tour</b>
</p> 

          <div class="signup">
            
      
            <input
              type="text"
              name="fullname"
              placeholder="FullName"
              value={formValues.fullname}
              onChange={handleChange}
              class="inputtext" />   <p>{formErrors.fullname}</p>       
            
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              class="inputtext"   />
        
          <p>{formErrors.username}</p>
         
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              class="inputtext"     />
         
          <p>{formErrors.email}</p>
        
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              class="inputpass"   /> <p>{formErrors.password}</p>
         
            <input
              type="password"
              name="password1"
              placeholder="Confirm Password"
              value={formValues.password1}
              onChange={handleChange}
              class="inputpass"    /> <p>{formErrors.password1}</p>
 <button id="button">Submit</button>
 <p>Already have an account ? <b id="sign in">sign in</b></p>
          </div>   
      </form>
    </div>
  );
}

export default App;