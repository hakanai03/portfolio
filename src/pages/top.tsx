import md5 from "md5";

const hash = md5("hakanai.blog@gmail.com");
const gravatarURL = `https://www.gravatar.com/avatar/${hash}?s=80`;

export const Top = () => {
  return (
    <div
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
      <p>hello! I'm shogo.</p>
      <p>
        Software Developer (Full Stack) / Web UI Designer / Infrastructure
        (Cloud, On-premise)
      </p>
    </div>
  );
};
