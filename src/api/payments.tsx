import API from "./axious";

export const getPayments = async () => {
  const response = await API.get('/payments');
  return response.data;
};
