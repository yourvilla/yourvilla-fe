import axios from "../../config/axios";
import { API_URLS } from "../../config/apiUrls";

export const getResidenceFn = (id) => {
  try {
    const response = axios.get(API_URLS.residences, {
      params: { id: id ? id : "" },
    });
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
