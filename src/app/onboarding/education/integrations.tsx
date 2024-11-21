import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Integrations: React.FC = () => {
  // State to manage the app name
  const [appName, setAppName] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const router = useRouter();

  // List of popular apps
  const popularApps = [
    ["None", "QuickBooks Online", "ServiceTitan", "ZipWhip"],
    ["HubSpot", "Square", "AppX", "AppY"],
    // ... You can add more rows of apps
  ];

  // Toggle app selection
  const toggleAppSelection = (app: string) => {
    setSelectedApps((prev) => {
      if (prev.includes(app)) {
        return prev.filter((a) => a !== app);
      } else {
        return [...prev, app];
      }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add the apps you use to run your business</h1>
      <p>
        Save hours per week by connecting your email and adding apps that can
        automate daily tasks.
      </p>

      {/* Input Field for App Name and Dropdown for Industry */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="What apps do you use?"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            boxSizing: "border-box",
          }}
        />
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            boxSizing: "border-box",
          }}>
          <option value="All Industries">All Industries</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          {/* ... You can add more options if needed ... */}
        </select>
      </div>

      <p style={{ fontWeight: "bold" }}>
        Popular apps for businesses like yours
      </p>

      {/* Grid of Popular Apps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
        }}>
        {popularApps.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((app, colIndex) => (
              <div
                key={colIndex}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "150px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => toggleAppSelection(app)}>
                {app}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Skip and Continue buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            router
              .push("/onboarding/education/hubspark-number")
              .catch((error) => console.error("Navigation error:", error));
          }}
          style={{ cursor: "pointer" }}>
          Skip
        </button>
        <button
          onClick={() => {
            router
              .push("/onboarding/education/hubspark-number")
              .catch((error) => console.error("Navigation error:", error));
          }}
          style={{
            marginLeft: "10px",
            cursor: selectedApps.length > 0 ? "pointer" : "not-allowed",
          }}
          disabled={selectedApps.length === 0}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Integrations;
