import React, { useState } from 'react'
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Form from '../components/Form'

const AddAuthor = (props) => {
const [err,setErr]=useState("");

    const addAuthor = (newAuthor) => {
        axios
      .post("http://localhost:8000/api/author/new" , newAuthor)
      .then((res) => {
        console.log({"addAuthor(post)":res.data});
        if(res.data.errorMessage){
            setErr(res.data.errorMessage.errors.name.message);
        }else{
            navigate("/");
        }
      })
      .catch((err) => console.log(err));
    }

  return (
    <div>
        <Link to="/">Home</Link>
        <h4 className="blue" >add a new authour</h4>
        <Form onSubmitProp={addAuthor} name="" submitValue="Add" />
        <p>{err}</p>
    </div>
  );
};

export default AddAuthor;
