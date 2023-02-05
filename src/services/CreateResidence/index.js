import axios from "../../config/axios";
import { API_URLS } from "../../config/apiUrls";

export const createResidenceFn = async (reqBody) => {
  try {
    const response = await axios.post(API_URLS.createResidence, reqBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
