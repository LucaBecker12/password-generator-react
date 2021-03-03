import "./App.css";
import React from "react";

function App() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "@€$%&§?/()[]{}*+-_";
  const numbers = "0123456789";
  const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

  const generate = () => {
    let values = lowercase;
    let password = "";

    if (document.getElementById("uppercase").checked) {
      values += uppercase;
    }
    if (document.getElementById("symbols").checked) {
      values += symbols;
    }
    if (document.getElementById("numbers").checked) {
      values += numbers;
    }

    const pwd_length = document.getElementById("password_length");
    for (let i = 0; i < parseInt(pwd_length.value); i++) {
      password += values.charAt(parseInt(Math.random() * values.length));
    }

    document.getElementById("password").innerHTML = password;
  };

  return (
    <div className="App">
      <div className="input-bar">
        <select id="password_length">
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <button onClick={generate}>Generate</button>
        <p id="password" />
      </div>
      <div className="options">
        <div>
          <input type="checkbox" id="uppercase" value="" />
          <label htmlFor="upLetters">include uppercase letters</label>
        </div>

        <div>
          <input type="checkbox" id="symbols" value="specialChars" />
          <label htmlFor="specialChars">include special characters</label>
        </div>

        <div>
          <input type="checkbox" id="numbers" value="numbers" />
          <label htmlFor="numbers">include numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
