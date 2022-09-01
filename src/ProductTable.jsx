import { useState } from 'react';

const Drivers = [
  { id: 1, name: 'Daniel', team: 'Mclaren', age: 27 },
  { id: 1, name: 'Emmy', team: 'Redbull', age: 24 },
  { id: 1, name: 'Michael', team: 'Audi', age: 21 },
  { id: 1, name: 'Shahmeen', team: 'Ferarri', age: 22 },
  { id: 1, name: 'Jabril', team: 'Renault', age: 27 },
];

function DriverList() {
  const [name, setName] = useState('');

  const [foundDrivers, setFoundDrivers] = useState(drivers);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = Drivers.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundDrivers(results);
    } else {
      setFoundDrivers(Drivers);
    }

    setName(keyword);
  }


  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter">
      </input>

      <div className="driver-list">
        {foundDrivers && foundDrivers.length > 0 ? (foundDrivers.map((user) => (
          <li key={user.id} className="user">
            <span className="user-id">{user.id}</span>
            <span className="user-name">{user.name}</span>
            <span className="user-team">{user.team}</span>
            <span className="user-age">{user.age}</span>
          </li>
        ))
        ) : (
          <h1>No Drivers Present</h1>

            )}
      </div>
    </div>
  )
}



