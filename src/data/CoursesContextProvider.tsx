import React, { useState } from 'react'
import CoursesContext, { Course } from './courses-context';

const CoursesContextProvider: React.FC = (props) => {

    // as courses state updated, this whole component is reRendered, right?
    const [courses, setCourses] = useState<Course[]>([
        {
            id: 'c1',
            title: 'React - The Complete Guide',
            enrolled: new Date(),
            goals: []
        }
    ]);
    
    const addCourse  = (title: string, date: Date) => {
        const newCourse: Course = {
            id: Math.random().toString(),
            title,
            enrolled: date,
            goals: []
        };

        setCourses(curCourses => {
            return curCourses.concat(newCourse);
        });
    };

    const addGoal    = () => {};
    const deleteGoal = () => {};
    const updateGoal = () => {};

    return (
        <CoursesContext.Provider value={{
            courses,
            addCourse,
            addGoal,
            deleteGoal,
            updateGoal
        }}>
            {props.children}
        </CoursesContext.Provider>
    )
}

export default CoursesContextProvider;