"use client";
import { useState } from "react";

export default function Props({
  name,
  rollNumber,
  city,
  time,
  campus,
}: {
  name: string;
  rollNumber: number;
  city:string
  time:number|string
  campus: string;
}) {
  const [userName, setUserName] = useState(name);
  const [classTime, setTime] = useState(time);
  const [usrRollNumber, setRollNumber] = useState(rollNumber);

  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            const inputName = prompt("What is your name?");
            if (inputName) setUserName(inputName);

            const time = prompt("What is your class time? Make sure it's a number");
            if (time) setTime((time));

            const rollNumber = prompt("Please enter your Roll Number");
            if (rollNumber) setRollNumber(Number(rollNumber));
          }}
          className="button"
        >
          Create Card
        </button>

        <div className="card">
          <h1>Student Id Card</h1>
          <p>{`Name: ${userName}`}</p>
          <p>{`Roll Number: ${usrRollNumber}`}</p>
        <p>{`City : ${city}`}</p>
          <p>{`Timing: ${classTime}`}</p>
          <p>{`Campus: ${campus}`}</p>
          <p className="signature">Signature : ______________________</p>
        </div>
      </div>
    </>
  );
}
