import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
// import DeleteBtn from "./DeleteBtn";

const AuthorsTable = () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data.Authors);
        if(authors[0] !== null)
          setLoaded(true);        
        console.log({"allAuthors":res.data.Authors});
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
        {loaded ?
        <table>
            <tbody>
            <tr>
                <th><b>Authors</b></th>
                <th><b>Actions</b></th>
            </tr>
            {authors.map((author,i)=>{return(
            <tr>
                <td style={{color:"blue"}} key={i}>{author.name}</td>
                <td>
                    <Link to={"/edit/"+author._id}>
                        <button style={{background:"linear-gradient(#e66465, #9198e5)",width:"50px",height:"20px",marginRight:"2px"}}>edit</button>
                    </Link>
                    <Link to={"/delete/"+author._id}>
                        <button style={{background:"linear-gradient(#e66465, #9198e5)",width:"50px",height:"20px"}}>delete</button>
                    </Link>
                </td>
            </tr>)
        })}
        </tbody>
    </table>
     :
      <>
            <table>
                <tbody>
                <tr>
                    <th><b>Authors</b></th>
                    <th><b>Actions</b></th>
                </tr>
                </tbody>
            </table>
        <p style={{opacity:0.3}}>fetching data...</p>
        </>
    }
     {/* {console.log(authors)} */}
     {/* <h3>{authors[1].name}</h3> */}
    </div>
  );
};

export default AuthorsTable;
