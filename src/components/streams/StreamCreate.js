import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    return props.createStream(formValues);
  };

  return (
    <div>
      <h3>Crear Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);

/* import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { useNavigate } from "react-router-dom";

const StreamCreate = (props) => {
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
      .createStream(formValues)
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
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

const formWrapped = reduxForm({ form: "streamCreate", validate })(StreamCreate);
export default connect(null, { createStream })(formWrapped); */
