import "./style.css";
import { useState } from "react";
import AlertCmp from "./AlertCmp";

export default function App() {
  let [UserData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    Age: "",
    isEmployee: "Yes",
    salary: "less than 500$",
  });

  let [showAlert, setShowAlert] = useState(false);

  return (
    <main className="main">
      <section>
        <h1>Requesting a Loan</h1>
        <hr />
        <form>
          <label>Full Name : </label>
          <input
            type="text"
            value={UserData.name}
            onChange={(e) => setUserData({ ...UserData, name: e.target.value })}
          />
        </form>

        <form>
          <label>Phone Number: </label>
          <input
            type="number"
            value={UserData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...UserData, phoneNumber: e.target.value })
            }
          />
        </form>

        <form>
          <label>Age: </label>
          <input
            type="number"
            value={UserData.Age}
            onChange={(e) => setUserData({ ...UserData, Age: e.target.value })}
          />
        </form>

        <h3 style={{ color: "#fff" }}>Are you an employee ?</h3>
        <form>
          <label>Yes</label>
          <input
            type="radio"
            name="question"
            value="Yes"
            checked={UserData.isEmployee === "Yes"}
            onChange={(e) => {
              setUserData({ ...UserData, isEmployee: e.target.value });
            }}
          />
          <label>No</label>
          <input
            type="radio"
            name="question"
            value="No"
            checked={UserData.isEmployee === "No"}
            onChange={(e) => {
              setUserData({ ...UserData, isEmployee: e.target.value });
            }}
          />
        </form>

        <h3 style={{ color: "#fff" }}>Salary</h3>
        <select
          style={{ padding: "4px" }}
          value={UserData.salary}
          onChange={(e) => setUserData({ ...UserData, salary: e.target.value })}
        >
          <option value="less than 500$">less than 500$</option>
          <option value="between 500$ and 1000$">between 500$ and 1000$</option>
          <option value="above 1000$">above 1000$</option>
        </select>

        <button
          type="submit"
          style={{
            backgroundColor:
              UserData.name !== "" &&
              UserData.phoneNumber !== "" &&
              UserData.Age !== ""
                ? "#fb0fbc"
                : "#acacac",
            pointerEvents:
              UserData.name !== "" &&
              UserData.phoneNumber !== "" &&
              UserData.Age !== ""
                ? "auto"
                : "none",
          }}
          onClick={() => setShowAlert(true)}
          onBlur={() => {
            setShowAlert(false);
            setUserData({
              name: "",
              phoneNumber: "",
              Age: "",
              isEmployee: "Yes",
              salary: "less than 500$",
            });
          }}
        >
          Submit
        </button>
        {showAlert && <AlertCmp UserData={UserData} />}
      </section>
    </main>
  );
}
