import {useState} from "preact/hooks";
import type Form from "@/src/libs/Form.ts";

function useForm(form: Form) {
  const [data, setData] = useState(form.getData());
  const [errors, setErrors] = useState({});

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (form.verifyData()) {
      form.setData(data);
      form.submitForm();
    } else {
      setErrors(form.getErrors());
    }
  }

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;