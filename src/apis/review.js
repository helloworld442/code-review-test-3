import api from "./instance";

const getReviews = async () => {
  const response = await api.get("/api/codeReview?page=0&size=10");
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
