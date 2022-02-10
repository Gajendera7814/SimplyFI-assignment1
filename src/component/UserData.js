import React, { useEffect, useState } from "react";
import '../App.css'

function UserData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                setData(resp);
            });
        });
    }, []);


    return (
        <div className="App" id="parentDiv">
            {data.map((item, i) => (
                    <div className="card" key={i}>
                        <div id="imgDiv" key={`${i}+b`}>
                            <img id="img" src={`https://avatars.dicebear.com/v2/avataaars/{${item.username}}.svg?options[mood][]=happy`} />
                        </div>
                        <div id="detailsDiv" key={`${i}+a`}>
                            <h1>{item.name}</h1>
                            <p><strong>Email:</strong> {item.email} </p>
                            <p><strong>Phone:</strong> {item.phone} </p>
                            <p><strong>Company:</strong> {item.company.name} </p>
                            <p><strong>Website:</strong> {item.website} </p>
                            <p><strong>Address:</strong> {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode} </p>
                        </div>
                    </div>
            ))}
        </div>
    );
}
export default UserData;