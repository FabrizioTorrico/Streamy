import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Modal from "../Modal";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
const StreamDelete = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    props.fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const stream = useSelector((state) => state.streams[id]);

  const actions = (
    <>
      <button
        onClick={() =>
          props
            .deleteStream(id)
            .then((res) => {
              navigate("/");
            })
            .catch((err) => {
              alert(err);
            })
        }
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    let textContent = "Estas seguro que quieres eliminar";
    textContent += stream
      ? `El Stream con título ${stream.title}?`
      : "este Stream?";
    return textContent;
  };
  return (
    <Modal
      title="Eliminar Stream"
      content={renderContent()}
      actions={actions}
    />
  );
};

export default connect(null, { fetchStream, deleteStream })(StreamDelete);
