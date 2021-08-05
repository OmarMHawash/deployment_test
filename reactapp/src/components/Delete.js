import axios from "axios";
import { navigate,Link } from "@reach/router";

const Delete = (props) => {
//   const { authorId } = props;

    axios
      .delete("http://localhost:8000/api/delete/" + props.id)
      .then((res) => {
        console.log({ "button(delete)": res });
        navigate("/");

      })
      .catch((err) => console.log(err.json));

      return (
          <div>
              <Link to="/new">Add an Author</Link>
            <h4 className="blue">we have quotes by:</h4>
              <h3>deleting...</h3>
          </div>
      )
  };

export default Delete;