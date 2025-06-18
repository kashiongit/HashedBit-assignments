

import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [teams, setTeams] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await res.json();
        const sortedData = data.sort((a, b) => parseFloat(a.NRR) - parseFloat(b.NRR));
        setTeams(sortedData);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);
  if (load) return <p >Your IPL Score is Comming! 3..2..1..</p>;

  return (
    <>
      <h1>IPL 2022 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.Team}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{parseFloat(team.NRR).toFixed(4)}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App