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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
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
      <p>
        Software Developer (Full Stack) / Web UI Designer / Infrastructure
        (Cloud, On-premise)
      </p>
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
    </Background>
  );
};
