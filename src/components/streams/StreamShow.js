import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchStream } from "../../actions";
import { useParams } from "react-router-dom";
const StreamShow = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const stream = useSelector((state) => state.streams[id]);

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default connect(null, { fetchStream })(StreamShow);
