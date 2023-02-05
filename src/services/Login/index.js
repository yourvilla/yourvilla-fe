import axios from "../../config/axios";
import { API_URLS } from "../../config/apiUrls";

export const loginFn = async (redBody) => {
  try {
    const response = await axios.post(API_URLS.login, redBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
