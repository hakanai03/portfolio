import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Top } from "./pages/top";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Orbitron", sans-serif;',
        },
      }}
    >
      <Top />
    </ConfigProvider>
  </React.StrictMode>
);
