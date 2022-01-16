import React from "react";
import { Bar } from "react-chartjs-2";
import { getFieldsData } from "../utils/utils";

const WeatherItem = ({ record }) => {
  const { temp, pressure, humidity } = record;

  return (
    <div className="graph-containers">
      <div className="item-name">
        <h1>{record.name}</h1>
        <h1>{record.country}</h1>
      </div>
      <Bar
        className="graph-container"
        data={getFieldsData("Temperature(C)", temp, "Temperature is")}
      />
      <Bar data={getFieldsData("Humidity(RH)", humidity, "Humidity is")} />
      <Bar
        data={getFieldsData(
          "Atmospheric pressure(Pa)",
          pressure,
          "Atmospheric Pressure is"
        )}
      />
    </div>
  );
};

export default WeatherItem;
