import React, { useState } from "react";
import CoursesContext, { Course, Goal } from "./courses-context";

const CoursesContextProvider: React.FC = (props) => {
  // as courses state updated, this whole component is reRendered, right?
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "React - The Complete Guide",
      enrolled: new Date(),
      goals: [],
    },
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title,
      enrolled: date,
      goals: [],
    };

    setCourses((curCourses) => {
      return curCourses.concat(newCourse);
    });
  };

  const addGoal = (courseId: string, enteredGoal: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text: enteredGoal,
    };

    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );

      const updatedCourseGoals =
        updatedCourses[updatedCourseIndex].goals.concat(newGoal);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;
      return updatedCourses;
    });
  };

  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((courses) => {
        const updatedCourses = [...courses];
        const updatedCourseIndex = updatedCourses.findIndex(
            (course) => course.id === courseId
        );

        const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.filter((goal) => goal.id !== goalId);
        const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
        updatedCourse.goals = updatedCourseGoals;
        updatedCourses[updatedCourseIndex] = updatedCourse;
        return updatedCourses;
    });
  };

  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((courses) => {
        const updatedCourses = [...courses];
        const updatedCourseIndex = updatedCourses.findIndex(
            (course) => course.id === courseId
        );

        const updatedCourseGoals = updatedCourses[updatedCourseIndex].goals.slice();
        const updatedCourseGoalIndex = updatedCourseGoals.findIndex(goal => goal.id === goalId);
        const updatedGoal = {...updatedCourseGoals[updatedCourseGoalIndex], text: newText};

        updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;
        
        const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
        updatedCourse.goals = updatedCourseGoals;
        updatedCourses[updatedCourseIndex] = updatedCourse;
        return updatedCourses;
    });
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        addCourse,
        addGoal,
        deleteGoal,
        updateGoal,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;