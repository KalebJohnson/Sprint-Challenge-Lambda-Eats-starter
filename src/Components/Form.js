import React, { useState } from 'react';
import ReactDOM from "react-dom";
import '../App.css';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required("Please enter a name"),
    pizzaSize: yup.string(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    salami: yup.boolean(),
    spinach: yup.boolean(),
    specialInstructions: yup.string()
})



const Form = props  => {



    const [form, setForm] = useState({
        name: "",
        pizzaSize: "",
        pepperoni: false,
        mushrooms: false,
        salami: false,
        spinach: false,
        specialInstructions: ""
      });
    
      const handleChanges = event => {
        event.persist()
        validate(event)
        console.log(form, event.target.checked);

        let value = event.target.type === 'checkbox' ? event.target.checked :event.target.value 
        setForm({...form, [event.target.name]: value});
    };

      const submitForm = (event) => {
        event.preventDefault();
        console.log("Submitted!");
        axios.post('https://reqres.in/api/users', form)
        .then( response => console.log(response))
        .catch(err => console.log(err))
      };

      const [errors, setErrors] = useState({
        name: "",
        pizzaSize: "",
        pepperoni: "",
        mushrooms: "",
        salami: "",
        spinach: "",
        specialInstructions: ""
      });

      const validate = (event) => {
        yup.reach(schema, event.target.name)
        .validate(event.target.value)
        .then( valid =>{
            setErrors({
                ...errors,
                [event.target.name]: ""
            })

        })
        .catch(err => {
            console.log(err.errors)
            setErrors({
                ...errors,
                [event.target.name]: err.errors[0]
            })
        })
      };

      return (
          <div style={{
              display: "flex",
              flexDirection: "column",
              height: "50%",
              justifyContent: "center",

          }}>
        <form style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: 'auto'
          }} className="form" onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChanges}
            id="name"
            type="text"
            name="name"
            placeholder="Name.."
            value={form.name}
          />
          {errors.name.length > 2 ? <p>{errors.name}</p>: null}

          <label htmlFor='pizzaSize'> Choose A Size!</label>
          <select
            value={form.pizzaSize}
            name="pizzaSize"
            id="pizzaSize"
            onChange={handleChanges}
          >
              <option value="6">6"</option>
              <option value="12">12"</option>
              <option value="18">18"</option>
              </select>
            <hr></hr>
          <label>Toppings!</label>
          <hr></hr>
          <label htmlFor='terms'>Pepperoni</label>
            <input type="checkbox"
             id="pepperoni" 
             name="pepperoni" 
             checked={form.pepperoni} 
             onChange={handleChanges}
            
             />
              <label htmlFor='terms'>Mushrooms</label>
            <input type="checkbox"
             id="mushrooms" 
             name="mushrooms" 
             checked={form.mushrooms} 
             onChange={handleChanges}
            
             />
               <label htmlFor='terms'>Salami</label>
            <input type="checkbox"
             id="salami" 
             name="salami" 
             checked={form.salami} 
             onChange={handleChanges}
            
             />
               <label htmlFor='terms'>Spinach</label>
            <input type="checkbox"
             id="spinach" 
             name="spinach" 
             checked={form.spinach} 
             onChange={handleChanges}
            
             />

                <label htmlFor='specialInstructions'>Special Instructions!</label>
            <input
            onChange={handleChanges}
            id="specialInstructions"
            type="text"
            name="specialInstructions"
            placeholder="Special Instructions"
            value={form.specialInstructions}            
            
            
            />    

          
          <button type="submit">Place Order!</button>
        </form>
        </div>
      );
    };



export default Form;