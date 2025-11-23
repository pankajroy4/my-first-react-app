import { useState } from "react";

export function Country() {
  const data = { "India": ["Delhi", "Mumbai", "Pune"], "USA": ["NYC", "LA", "Chicago"], "Canada": ["Toronto", "Vancouver", "Montreal"] }

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  function handleCountryChange(e) {
    setCountry(e.target.value)
    setCity("")
  }

  function handleCityChange(e) {
    if (country === "") return;
    setCity(e.target.value)
  }

  return (
    <>
      <label htmlFor="country">Choose a country:</label>
      <select name="country" value={country} onChange={handleCountryChange}>
        <option value="">-- Select Country --</option>
        {Object.keys(data).map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {country &&
        <>
          <label htmlFor="city">Choose a City:</label>
          <select name="city" value={city} onChange={handleCityChange}>
            <option value="">-- Select City --</option>
            {
              data[country].map((city) => {
                return <option key={city} value={city}>{city}</option>
              })
            }
          </select>


          <div>
            <h4>You have Selected:</h4>
            <p>Country: {country}</p>
            <p>City: {city}</p>
          </div>
        </>
      }
    </>
  );
}