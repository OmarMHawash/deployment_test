import { Link } from '@reach/router';
import React, { useState } from 'react'

const Form = (props) => {
    const {name,submitValue,onSubmitProp} = props;
    const [formName, setName] = useState(name);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({name:formName});
  }
  return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>name:</label><br />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Author Name"
              value={formName}
            />
            <br />
            <Link to='/'><input type="submit" value="Cancel"/></Link>
            <input type="submit" value={submitValue} />
          </form>
        </div>

  );
};

export default Form;
