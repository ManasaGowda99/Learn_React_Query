import React from "react";
import { useQuery } from "react-query";

function GetData() {
  const { data, error, isError, isLoading } = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <p>Fetching data...</p>;
  }

  if (isError) {
    return <p>Error! {error.message}</p>;
  }
  return (
    <div>
      <h2>Get Data...</h2>
      <div>
        {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default GetData;
