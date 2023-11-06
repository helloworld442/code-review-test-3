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

  async postFetchEmail(e, req) {
    e.preventDefault();

    try {
      const data = await emailSend({ email: req.email });

      this.snapshot = { emailSuccess: true, emailError: null };
    } catch (error) {
      this.snapshot = { emailSuccess: false, emailError: error };
    }

    this.publish();
  }

  async postFetchEmailCode(e, req) {
    e.preventDefault();

    try {
      const data = await emailCheck({ email: req.email, successKey: req.successKey });

      this.snapshot = { emailCodeSuccess: true, emailCodeError: null };
    } catch (error) {
      this.snapshot = { emailCodeSuccess: false, emailCodeError: error };
    }

    this.publish();
  }

  async postFetchLogin(e, req) {
    e.preventDefault();

    try {
      const data = await loginUser(req);

      this.snapshot = { loginSuccess: true, loginError: null };
    } catch (error) {
      this.snapshot = { loginSuccess: false, loginError: error };
    }

    this.publish();
  }

  resetFetchData() {
    this.snapshot = {};

    this.publish();
  }
}
