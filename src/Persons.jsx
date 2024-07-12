import React from "react";
import persons from "./persons.json";

export function Person() {
  return (
    <div style={{ backgroundColor: "#212529" }} className="pt-3">
      <div className="d-flex flex-wrap justify-content-center">
        {persons.map((person) => (
          <div
            key={person}
            className="text-dark p-4 position-relative bg-light"
            style={{ width: "400px", margin: "10px", backgroundColor: "#" }}
          >
            <h3
              className="position-absolute top-0 end-0 text-center"
              style={{
                background:
                  "linear-gradient(108.35deg, #FC4A1A -36.03%, #F7B733 128.44%)",
                width: "50px",
                height: "50px",
              }}
            >
              {person.id}
            </h3>
            <h5>
              Name: {person.first_name} {person.last_name}
            </h5>
            <p className="fs-5">Address: {person.address}</p>
            <p className="fs-5">Email: {person.email}</p>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
