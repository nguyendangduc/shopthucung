import React, {useContext} from 'react';
import AppContext from 'AppContext';
import { renderRoutes } from "react-router-config";

const Users = (props) => {
  const routes = useContext(AppContext);
  return <>
    <h3>Admin</h3>
    {renderRoutes(routes)}
  </>
}

export default Users;