import { Field, Formik, Form } from "formik";
import toast from "react-hot-toast";
import { Cctv } from "lucide-react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    search: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!values.search.trim()) {
      toast.error("Please enter a search term", {
        position: "top-right",
      });
      return;
    }
    onSubmit(values.search);
    resetForm();
  };

  return (
    <header className={s.container}>
      <div className={s.logoContainer}>
        <h1 className={s.title}>
          Photo<span className={s.span}>Seek</span>
        </h1>
        <Cctv className={s.icon} />
      </div>
      <div className={s.formContainer}>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form className={s.form}>
            <Field
              className={s.input}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={s.btn} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
};

export default SearchBar;
