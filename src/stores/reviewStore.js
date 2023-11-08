import { getReviewById, getReviews, postReviews } from "../apis/review";

export default class ReviewStore {
  snapshot = {};

  listeners = new Set();

  addEventListener(listener) {
    this.listeners.add(listener);
  }

  removeEventListener(listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  getSnapshot() {
    return this.snapshot;
  }

  async getFetchData() {
    const data = await getReviews();

    this.snapshot = { items: data };

    this.publish();
  }

  async getFetchItem(postId) {
    const data = await getReviewById(postId);

    this.snapshot = { item: data };

    this.publish();
  }

  async postFetchData(req) {
    try {
      const data = await postReviews(req);

      this.snapshot = { postSuccess: true, postError: null };
    } catch (error) {
      this.snapshot = { postSuccess: false, postError: error };
    }

    this.publish();
  }

  resetFetchData() {
    this.snapshot = {};

    this.publish();
  }
}
