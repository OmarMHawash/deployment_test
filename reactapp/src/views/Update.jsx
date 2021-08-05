import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { navigate,Link } from "@reach/router";

const Update = (props) => {
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [err,setErr]=useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + props.id).then((res) => {
      setAuthor(res.data[0]);
      console.log({"update(get)":res.data[0]});
      if (author) {
        setLoaded(true);
      }
    });
  }, []);

  const updateAuthor = (newAuthor) => {
    axios
      .put("http://localhost:8000/api/edit/" + props.id, newAuthor)
      .then((res) => {
        console.log({"update(put)":res.data});
        if(res.data.errorMessage){
            setErr(res.data.errorMessage.errors.name.message);
        }else{
            navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
        <Link to="/">Home</Link>
        <h4 className="blue">edit this author</h4>
      {loaded ? 
      (
        <Form
          onSubmitProp={updateAuthor}
          name={author.name}
          submitValue="update"
        />
      ) : 
      <p style={{opacity:0.3}}>fetching data...</p>
    }<p>{err}</p>
    </div>
  );
};

export default Update;
