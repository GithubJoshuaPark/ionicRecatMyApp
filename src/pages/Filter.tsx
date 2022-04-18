import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonToggle } from '@ionic/react';
import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router'
import CoursesContext from '../data/courses-context';

const Filter:React.FC<RouteComponentProps> = (props) => {
    
    const coursesCtx = useContext(CoursesContext);

    const courseFilterChangeHandler = (e: CustomEvent) => {
        console.log(`🍎 ~ file: Filter.tsx ~ line 8 ~ courseFilterChangeHandler ~ course.id: ${e.detail.value}, checked: ${e.detail.checked}`);
        coursesCtx.changeCourseFilter(e.detail.value, e.detail.checked);
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Filter</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {
                        coursesCtx.courses.map(course => (
                            <IonItem key={course.id}>
                                <IonLabel>{course.title}</IonLabel>
                                <IonToggle value={course.id} checked={course.included} onIonChange={courseFilterChangeHandler}/>
                            </IonItem>
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Filter