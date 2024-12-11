import React, { createContext, useState } from "react";
import STUDENT_DATA from "./data/StudentData.json"; // Ensure path is correct

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students] = useState(STUDENT_DATA);
  const [messagedStudents, setMessagedStudents] = useState([]);

  const markStudentAsMessaged = (id) => {
    setMessagedStudents((prev) => [...prev, id]);
  };

  return (
    <StudentContext.Provider
      value={{ students, messagedStudents, markStudentAsMessaged }}
    >
      {children}
    </StudentContext.Provider>
  );
}
