import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const year = 2020;
function Greeting() {
  const [developer, setDeveloper] = useState({
    language: "python",
    experience: 0,
    isEmployed: false,
  });

  return (
    <div>
      <h2>Hello world</h2>
      <p>Welcome to React</p>
      <p onClick={() => setDeveloper({ ...developer, language: "javascript" })}>
        Change spoken language {developer.language}
      </p>
      <input
        type="number"
        onChange={(e) => {
          setDeveloper({ ...developer, experience: e.target.value });
        }}
      />
      <div>I have {developer.experience} years of experience</div>
      <div
        onClick={() =>
          setDeveloper((prev) => {
            return { ...prev, isEmployed: !prev.isEmployed };
          })
        }
      >
        I am {developer.isEmployed ? "Employed" : "Not employed"}
      </div>
    </div>
  );
}
function Layout({ children }) {
  return <div style={{ background: "goldenrod" }}>{children}</div>;
}

root.render(
  <Layout>
    <Greeting />
  </Layout>
);
