import {
  CoffeeOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Grid, Row, Typography } from "antd";
import md5 from "md5";
import { Background } from "../features/animations/Background";
import { Shine } from "../features/animations/Shine";
import { Swinging } from "../features/animations/Swinging";
import { useTypewriter } from "../features/hooks/useTypewriter";

const hash = md5("hakanai.blog@gmail.com");
const gravatarURL = `https://www.gravatar.com/avatar/${hash}?s=400`;

const typingSpeed = 50; //[ms]

export const Top = () => {
  const name = useTypewriter("Hello! I'm Shogo.", typingSpeed, 100);
  const domain1 = useTypewriter(
    "Software Developer (Full Stack)",
    typingSpeed,
    1200
  );
  const slash1 = useTypewriter("/", 0, 3000);
  const domain2 = useTypewriter("Web UI Designer", typingSpeed, 3000);
  const slash2 = useTypewriter("/", 0, 4100);
  const domain3 = useTypewriter(
    "Infrastructure Engineer (Cloud, On-premise)",
    typingSpeed,
    4100
  );
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
          <Typography.Title level={1}>
            <Shine style={{ textAlign: "center" }}>{name}</Shine>
          </Typography.Title>
        </div>
        <Row justify="center" gutter={[16, 16]} style={{ textAlign: "center" }}>
          <Col xs={span} sm={span}>
            {domain1}
          </Col>
          <Col xs={span} sm={span}>
            {slash1}
          </Col>
          <Col xs={span} sm={span}>
            {domain2}
          </Col>
          <Col xs={span} sm={span}>
            {slash2}
          </Col>
          <Col xs={span} sm={span}>
            {domain3}
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
