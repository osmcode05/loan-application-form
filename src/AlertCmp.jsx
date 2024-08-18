import { useState } from "react";

let DeleteInpsValue = false;
export default function AlertCmp({ UserData }) {
  let nameRegex = /^[A-Za-z][A-Za-z\s-]{3,30}[A-Za-z\s]$/; // Regular Expression for User name
  let phoneNumberRegex = /^0[5-7]\d{8}$/;
  let [Status] = useState(
    !nameRegex.test(UserData.name) // if the name is false
    ? "Name is not allowed"
    : !phoneNumberRegex.test(UserData.phoneNumber) // if the Number Phone is false
    ? "Phone Number format is incorrect"
    : UserData.Age < 18 || UserData.Age > 100 // if the Age is less than 18 or more than 100
    ? " Your Age must be between 18 and 100 to take a loan"
    : "The form has been submitted successfully" // if All info are correct
  );
  
  DeleteInpsValue = Status === "The form has been submitted successfully";
  console.log(DeleteInpsValue ? UserData : "The user's info is not correct");

  return (
    <div
      style={{
        color:
          !nameRegex.test(UserData.name) ||
          !phoneNumberRegex.test(UserData.phoneNumber) ||
          UserData.Age < 18 ||
          UserData.Age > 100
            ? "red"
            : "green",
      }}
      className="AlertCmp"
    >
      <p>{Status}</p>
    </div>
  );
}

export { DeleteInpsValue };
