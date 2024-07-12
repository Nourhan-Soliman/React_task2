import React from "react";
import Loc from "./locations.json";

export function Location() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {Loc.map((location) => (
        <div
          key={location} 
          className="text-light p-4 position-relative"
          style={{ width: "400px", margin: "10px", backgroundColor: "#212529" }}
        >
          <h3
            className="position-absolute  top-0 end-0 text-center "
            style={{
              background:
                "linear-gradient(108.35deg, #FC4A1A -36.03%, #F7B733 128.44%)",
              width: "50px",
              height: "50px",
            }}
          >
            {location.location_id}
          </h3>
          <h5>Name: {location.name}</h5>
          <p className="fs-5">Description: {location.description}</p>
          <p className="fs-5">Country: {location.country}</p>
          <p className="position-absolute bottom-0 end-0">{location.city}</p>
        </div>
      ))}
    </div>
  );
}
