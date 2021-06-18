import { useState } from "react";
import axios from "axios";

const initialStringToCut = {
  string_to_cut: "",
};

export const Card = () => {
  const [stringToCut, setStringToCut] = useState("");
  const [cutString, setCutString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://databackend.herokuapp.com/test", stringToCut)
      .then((res) => {
        setCutString(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setStringToCut({ ...stringToCut, string_to_cut: e.target.value });
  };

  return (
    <div>
      <div className="card-container">
        <div className="card">
          <h1>Lyft Test</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => handleChange(e)}
              value={stringToCut.string_to_cut}
              type="text"
              name="body"
            />
            <button type="submit">Cut</button>
          </form>
          <h2>{cutString.return_string}</h2>
        </div>
      </div>
    </div>
  );
};
