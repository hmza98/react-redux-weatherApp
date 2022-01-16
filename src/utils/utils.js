import * as constants from "../constants/constants";

const getLabel = (fieldName) => {
  return [fieldName];
};

const getData = (fieldValue) => {
  return [fieldValue];
};

const getColors = (fieldName) => {
  console.log("The field name is ", fieldName);
  switch (fieldName) {
    case "Temperature(C)":
      return {
        backgroundColor: constants.temperatureBackgroundColor,
        borderColor: constants.temperatureBorderColor,
      };
    case "Humidity(RH)":
      return {
        backgroundColor: constants.humidityBackgroundColor,
        borderColor: constants.humidityBorderColor,
      };
    case "Atmospheric pressure(Pa)":
      return {
        backgroundColor: constants.pressureBackgroundColor,
        borderColor: constants.pressureBorderColor,
      };
  }
};

export const getFieldsData = (fieldName, fieldValue, titleName) => {
  return {
    labels: getLabel(fieldName),
    datasets: [
      {
        label: titleName,
        data: getData(fieldValue),
        backgroundColor: getColors(fieldName).backgroundColor,
        borderColor: getColors(fieldName).borderColor,
        borderWidth: constants.borderWidth,
      },
    ],
  };
};
