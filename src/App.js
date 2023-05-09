import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
      setTimeout(updateProgress, 1000);
    }
  };

  updateProgress();

  return (
    <div>
      <div
        style={{
          backgroundColor: "#ccc",
          height: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#008CBA",
            height: "10px",
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProgressBar />
      <iframe
        title="Techfest website"
        src="https://techfest.org/"
        style={{ width: "100%", height: "100vh", border: "none" }}
      ></iframe>
    </div>
  );
};

export default App;
