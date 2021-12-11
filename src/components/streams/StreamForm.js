import React from "react";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
const StreamForm = (props) => {
  const navigate = useNavigate();

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props
      .onSubmit(formValues)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="titulo" />
      <Field name="description" component={renderInput} label="Descripcion" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Debes escribir un titulo";
  }
  if (!formValues.description) {
    errors.description = "Debes escribir una descripcion";
  }
  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
