import { emailCheck, emailSend, loginUser } from "../apis/auth";

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

  async postFetchEmail(req) {
    try {
      const data = await emailSend(req);

      this.snapshot = { emailSuccess: true, emailError: null };
    } catch (error) {
      this.snapshot = { emailSuccess: false, emailError: error };
    }

    this.publish();
  }

  async postFetchEmailCode(req) {
    try {
      const data = await emailCheck(req);

      this.snapshot = { emailSuccess: true, emailCodeSuccess: true, emailCodeError: null };
    } catch (error) {
      this.snapshot = { emailSuccess: true, emailCodeSuccess: false, emailCodeError: error };
    }

    this.publish();
  }

  async postFetchLogin(req) {
    try {
      const data = await loginUser(req);

      this.resetFetchData();

      window.location.href = "/";
    } catch (error) {
      this.setFetchError({ key: "loginError", value: error });
    }
  }

  resetFetchData() {
    this.snapshot = {};

    this.publish();
  }

  setFetchError({ key, value }) {
    this.snapshot = { [key]: value };

    this.publish();
  }
}
