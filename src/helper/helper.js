import alkemyApi from "../api/login";

export const handleDate = (date) => {
  return date.slice(0, 10);
};

export const searchUser = async (receptorId, Autorizacion) => {
  try {
    const res = await alkemyApi.get(`accounts/${receptorId}`, Autorizacion);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReceptorName = async (userId, Autorizacion) => {
  try {
    const res = await alkemyApi.get(`users/${userId}`, Autorizacion);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
