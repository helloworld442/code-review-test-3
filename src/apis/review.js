import api from "./instance";

const getReviews = async () => {
  const response = await api.get("/api/codeReview");
  console.log(response.data);
  return response.data;
};

const getReviewById = async (req) => {
  const response = await api.get("/reviews/" + req);
  return response.data;
};

const postReviews = async (req) => {
  const response = await api.post("/api/codeReview", req);
  return response.data;
};

export { getReviews, getReviewById, postReviews };
