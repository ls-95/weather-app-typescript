import React, { useState } from "react";

function App() {
  const [locationSearch, setLocationSearch] = useState("");
  const [locations, setLocations] = useState<string[]>([]);
  const disableSearch = locationSearch.trim() === "";
  const addLocation = () => {
    setLocations([locationSearch, ...locations]);
    setLocationSearch("");
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div>
        <label>
          Add Location{" "}
          <input
            type="text"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            className="ml-1 mr-1"
          />
        </label>
        <button
          onClick={addLocation}
          disabled={disableSearch}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>

      <div>
        <h2>Locations</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr key={index}>
                <td>{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
