import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: "#e8b51f", color: "white" }}
    >
      <h3>
        <a href={repo.html_url} style={{ color: "white" }}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
