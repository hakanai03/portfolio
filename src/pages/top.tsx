import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Grid, Row } from "antd";
import md5 from "md5";
import { Background } from "../features/animations/Background";

const hash = md5("hakanai.blog@gmail.com");
const gravatarURL = `https://www.gravatar.com/avatar/${hash}?s=400`;

export const Top = () => {
  const { md } = Grid.useBreakpoint();
  const span = md ? undefined : 24;

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
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
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
        </div>
        <Row justify="center" gutter={[16, 16]} style={{ textAlign: "center" }}>
          <Col xs={span} sm={span}>
            Software Developer (Full Stack)
          </Col>
          <Col xs={span} sm={span}>
            /
          </Col>
          <Col xs={span} sm={span}>
            Web UI Designer
          </Col>
          <Col xs={span} sm={span}>
            /
          </Col>
          <Col xs={span} sm={span}>
            Infrastructure (Cloud, On-premise)
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
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
