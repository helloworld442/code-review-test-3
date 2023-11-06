import { useContext } from "react";
import { SignUpFormContext } from "../SignUpForm/SignUpForm";

export default function useInput() {
  const { form, setForm } = useContext(SignUpFormContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return [form, onChange];
}
