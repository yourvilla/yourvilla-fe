import axios from "../../config/axios";
import { API_URLS } from "../../config/apiUrls";

export const addReviewFn = async (reqBody) => {
  try {
    const response = await axios.post(API_URLS.addReview, reqBody);
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};

export const getReviewFn = (id) => {
  try {
    const response = axios.get(API_URLS.getReview, {
      params: { id: id ? id : "" },
    });
    return response;
  } catch ({ error }) {
    throw new Error(error.message);
  }
};
