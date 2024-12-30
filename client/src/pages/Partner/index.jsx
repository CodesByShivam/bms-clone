import React from "react";
import TheatreList from "./TheatreList";
import { Tabs } from "antd";
import { useSelector } from "react-redux";

function Partner() {
  const { user } = useSelector((state) => state.users);

  const items = [{ key: "1", label: "Theatres", children: <TheatreList /> }];
  return (
    <div className="main-content">
      <h1>Partner Page</h1>
      {
        user.role === "partner"
          ? <Tabs items={items} />
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

export default Partner;
