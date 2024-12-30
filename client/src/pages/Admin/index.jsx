import React from "react";
import { Tabs } from "antd";
import MovieList from "./MovieListComponent";
import TheatresTable from "./TheatresTable";
import { useSelector } from "react-redux";

function Admin() {

  const { user } = useSelector((state) => state.users);
  const tabItems = [
    { key: "1", label: "Movies", children: <MovieList /> },
    {
      key: "2",
      label: "Theatres",
      children: <TheatresTable />,
    },
  ];
  return (
    <div className="main-content">
      <h1>Admin Page</h1>
      {
        user.role === "admin"
        ? <Tabs items={tabItems} />
        : <div style={{
          display: 'flex',
          height: '80vh',
          justifyContent: 'center',
          fontSize: 'xxx-large',
          alignItems: 'center',
        }}>
          You do not have access to this page.
        </div>
      }
    </div>
  );
}

export default Admin;
