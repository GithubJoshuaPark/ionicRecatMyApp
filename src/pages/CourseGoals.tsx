import React from 'react'
import { RouteComponentProps } from 'react-router'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonBackButton, IonButtons, IonButton } from '@ionic/react';

const CourseGoals:React.FC<RouteComponentProps> = (props) => {
    const backPageHandler = () => {
        props.history.goBack()
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/courses" />
                    </IonButtons>
                    <IonTitle>Course Goal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This Works - course goal!!</h2>
                <div>
                <IonButton onClick={backPageHandler}>To Go Back</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default CourseGoals