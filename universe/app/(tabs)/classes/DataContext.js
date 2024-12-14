import React, { createContext, useState, useContext } from "react";
import CLASSROOM_DATA from "../../data/ClassroomData.json";
import CLASSROOM_STUDENT_DATA from "../../data/ClassroomStudentData.json";
import LESSON_DATA from "../../data/LessonData.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [classes, setClasses] = useState(CLASSROOM_DATA);
  const [names, setNames] = useState(CLASSROOM_STUDENT_DATA);
  const [lessons, setLessons] = useState(LESSON_DATA);

  const addClass = (newItem, newLessonElement) => {
    setClasses((prevItems) => [newItem, ...prevItems]);
    setLessons((prevItems) => [...prevItems, newLessonElement]);
  };

  const deleteClass = (itemId) => {
    setClasses((prevItems) =>
      prevItems.filter((classes) => classes.id !== itemId)
    );
  };

  const addLesson = (outerId, newItem) => {
    setLessons((prevItems) =>
      prevItems.map((item) =>
        item.id === outerId
          ? { ...item, allData: [...item.allData, newItem] }
          : item
      )
    );
  };

  const deleteLesson = (outerId, itemId) => {
    setLessons((prevItems) =>
      prevItems.map((item) =>
        item.id === outerId
          ? {
              ...item,
              allData: item.allData.filter((lesson) => lesson.id !== itemId),
            }
          : item
      )
    );
  };

  const addName = (newItem) => {
    setNames((prevItems) => [newItem, ...prevItems]);
  };

  const deleteName = (itemId) => {
    setNames((prevItems) => prevItems.filter((names) => names.name !== itemId));
  };

  return (
    <DataContext.Provider
      value={{
        classes,
        addClass,
        deleteClass,
        names,
        addName,
        deleteName,
        lessons,
        setLessons,
        addLesson,
        deleteLesson,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
