import React from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const params = useParams();

  console.log(params);

  return <div>
    <h2>Podrobnosti o filmu</h2>
    ...
    </div>
};
