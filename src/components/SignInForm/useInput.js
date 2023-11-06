import { useState } from "react";

export default function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return [form, onChange, resetForm];
}
