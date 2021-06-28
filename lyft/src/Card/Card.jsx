import { useState } from "react";
import axios from "axios";

import { StyledCard } from "./StyledCard";

export const Card = () => {
  const [stringToCut, setStringToCut] = useState({});
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
    <StyledCard>
      <div className="card-container">
        <div className="card">
          <h1>Lyft Test</h1>
          <form className="card-form" onSubmit={handleSubmit}>
            <input
              placeholder="iamyourlyftdriver"
              autoComplete="off"
              autoFocus
              onChange={(e) => handleChange(e)}
              value={stringToCut.string_to_cut}
              type="text"
              name="body"
            />
            <button className="hide" type="submit">
              Cut
            </button>
          </form>
          <h2>{cutString.return_string}</h2>
        </div>
      </div>
    </StyledCard>
  );
};
