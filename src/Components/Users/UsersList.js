import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      {props.users.length > 0 ? (
        <ul>
          {props.users.map((user) => (
            <li key={user.key}>
              {user.name} {user.age} Years old
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
};

export default UsersList;
