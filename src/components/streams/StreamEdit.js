import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const stream = useSelector((state) => state.streams[id]);

  const onSubmit = (formValues) => {
    return props.editStream(id, formValues);
  };

  if (!stream) {
    return <div>...cargando</div>;
  }

  const { title, description } = stream;
  return (
    <div>
      <h3>Editar Stream</h3>
      <StreamForm onSubmit={onSubmit} initialValues={{ title, description }} />
    </div>
  );
};

export default connect(null, { fetchStream, editStream })(StreamEdit);
