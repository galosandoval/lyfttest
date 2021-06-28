import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";

import { StyledCard } from "./StyledCard";
import { string } from "prop-types";

const initialState = {
  string_to_cut: "",
};

export const Card = () => {
  const [stringToCut, setStringToCut] = useState(initialState);
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
    setStringToCut({ ...stringToCut, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (stringToCut.string_to_cut.length < 3) {
      $(".button").addClass("hide").attr("disabled", true);
    } else {
      $(".button").removeClass("hide").attr("disabled", false);
    }
  }, [stringToCut.string_to_cut]);

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
              onChange={handleChange}
              value={stringToCut.string_to_cut}
              type="text"
              name="string_to_cut"
            />
            <button className="button hide" type="submit">
              Cut
            </button>
          </form>
          <h2>{cutString.return_string}</h2>
        </div>
      </div>
    </StyledCard>
  );
};
