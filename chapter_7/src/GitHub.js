import React, { useEffect, useState} from "react";
import { Card, Spinner } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import axios from 'axios';

function Github() {

    const [data, setData] = useState([]);
    const [search, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData()
    }, [setSearchTerm]);

    const getData = async()=> {

         await axios.get(`https://api.github.com/search/users?q=${search}`).then(res => {
            //console.log(res.data.items);
            setData(res.data.items)
            setIsLoading(false)
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData();
        }

    const listUsers = data.map((user) =>
        <Card key={user.id}>
            <a href={user.html_url}>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={user.avatar_url}
                    alt="Generic placeholder"
                />
            </a>
            <Card.Body>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
            </Card.Body>
        </Card>
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={event=>setSearchTerm(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <h3>Github Users Results</h3>
            {isLoading &&
                <ReactLoading type="spinningBubbles" color="#444" />
            }
            {listUsers}
        </div>
    )

}

export default Github;