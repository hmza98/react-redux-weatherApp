const pushData = (payload) => {
  return {
    type: "push",
    payload: payload,
  };
};

const getData = () => {
  return {
    type: "pull",
  };
};

const actions = {
  pushData: pushData,
  getData: getData,
};

export default actions;
