import {
  IonContent,
  IonHeader,
  IonTitle,
  IonPage,
  IonToolbar,
  IonButtons,
  IonLoading,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { COURSE_DATA } from "../mockUpdata/COURSE_DATA";

const AllGoals: React.FC<RouteComponentProps> = (props) => {

    const [showLoading, setShowLoading] = useState(true);
    
    let goals = COURSE_DATA.map(course => {
                    return course.goals.map(goal => {
                        return {...goal, courseTitle: course.title}
                    })
                }).reduce((acGoals, curGoals) => {
                    let addedGoals = acGoals
                    for(const goal of curGoals) {
                        addedGoals = addedGoals.concat(goal)
                    }
                    return addedGoals
                }, [])

    console.log(`🍎 ~ file: AllGoals.tsx ~ line 26 ~ goals`, goals);

    return (
        <>
            <IonLoading
                cssClass="my-custom-class"
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={"Please wait..."}
                duration={500}
            />
            {<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/> make side menu shown in toggle
                        {/* <IonBackButton defaultHref="/courses/list" /> */}
                    </IonButtons>
                    <IonTitle>All Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonList>
                    {
                       goals.map((v, i) => (
                            <IonItem key={v.id}>
                                <IonLabel>
                                    <h2>{v.text}</h2>
                                    <p>{v.courseTitle}</p>
                                </IonLabel>
                               
                            </IonItem>
                       ))
                    }
                </IonList>
            </IonContent>
            </IonPage>}
        </>

    );
};

export default AllGoals;

