import React from 'react'
import { Link } from "@reach/router";
import AuthorsTable from '../components/AuthorsTable'
const Home = () => {

    return (
        <div>
            <Link to="/new">Add an Author</Link>
            <h4 className="blue">we have quotes by:</h4>
            <AuthorsTable />
        </div>
    )
}
export default Home;