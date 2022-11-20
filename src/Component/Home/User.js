import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const User = () => {
  const [state, setState] = useState([]);
  const url = "http://localhost:7777/users/all";

  useEffect(() => {
    axios.get(url).then((e) => console.log(setState(e.data)));
  });

  {
    state.map((e) => {
      return (
        <div>
          <div className="items">
            <Link>
              <div className="col1">
                <p>
                  <b>{e.ism + " " + e.familya}</b>{" "}
                </p>
              </div>
              <div className="col3">
                <p>{e.email}</p>
              </div>
            </Link>
            ;
          </div>
        </div>
      );
    });
  }
};

export default User;
