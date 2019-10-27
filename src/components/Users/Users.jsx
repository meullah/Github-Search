import React from "react";
import UserItem from "./UserItem";
import "../../App.css";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

const Users = ({ data, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {data.map(item => (
          <UserItem key={item.id} user={item} />
        ))}
      </div>
    );
  }
};

const UserStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

Users.prototype = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
