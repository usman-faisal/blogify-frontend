import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <li>
      <table>
        <tbody>
          <tr>
            <td>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </td>
            <td>{user.blogs.length}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default User;
