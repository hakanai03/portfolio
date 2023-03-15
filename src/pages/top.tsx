import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import md5 from "md5";
import { Background } from "../features/animations/Background";

const hash = md5("hakanai.blog@gmail.com");
const gravatarURL = `https://www.gravatar.com/avatar/${hash}?s=80`;

export const Top = () => {
  return (
    <Background
      style={{
        height: "100svh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          margin: "1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            width: "5rem",
            height: "5rem",
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "5rem", height: "100%" }}
            src={gravatarURL}
            alt="Gravatar Icon"
          />
        </div>
        <p>I'm shogo.</p>
        <div style={{display: "flex", justifyContent: "center"}}>
          <p>Software Developer (Full Stack)</p>
          <p> / </p>
          <p>Web UI Designer</p>
          <p> / </p>
          <p>Infrastructure (Cloud, On-premise)</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="https://github.com/hakanai03">
            <GithubOutlined style={{ fontSize: "2rem" }} />
          </a>
          <a href="https://twitter.com/i_shogo03" style={{ fontSize: "2rem" }}>
            <TwitterOutlined />
          </a>
        </div>
      </div>
    </Background>
  );
};
