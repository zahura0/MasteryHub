import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Side_Bar from "./Side_Bar";
import Header from "./Header";

const Admin_Body = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Side_Bar isOpen={isOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="flex-1 p-6" style={{ background: "white" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin_Body;
