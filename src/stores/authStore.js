import { loginUser } from "../apis/auth";

export default class AuthStore {
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

  async postFetchLogin(req) {
    try {
      const data = await loginUser(req);

      this.snapshot = { data, error: null };
    } catch (error) {
      this.snapshot = { data: null, error };
    }

    this.publish();
  }

  resetFetchData() {
    this.snapshot = {};

    this.publish();
  }
}
