import React, { useState, useEffect } from "react";

const App = () => {
  const [ meetings, setMeetings ] = useState( [] );

  const getMeetings = async () => {
    try {
      const response = await fetch("http://localhost:1337/etkinliks");
      const jsonData = await response.json();

      setMeetings(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect( () => {
    getMeetings();
  }, []);

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        
        
        <tbody>
          {meetings.map( (meet)=> (
            <tr key={meet.id} >
              <th scope="row">{meet.id}</th>
              <td>{meet.Title} </td>
              <td>{meet.Description}</td>
              <td>{meet.Date}</td>
            </tr>
          ) 
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
