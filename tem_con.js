import {useState} from 'react';

function TemCon() {
  const [temperature, setTemperature] = useState(0);
return (
    <div>
      <h1>Temperature Converter</h1>
      <input
        type="number"
        value={temperature}
        onchange={f = c*9/5 + 32}
        <p>display: {temperature}°C</p>
      />
    </div>
  );
}