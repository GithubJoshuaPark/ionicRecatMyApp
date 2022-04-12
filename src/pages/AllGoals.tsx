import {
  IonContent,
  IonHeader,
  IonTitle,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";

const AllGoals: React.FC<RouteComponentProps> = (props) => {

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    {/* <IonMenuButton/> make side menu shown in toggle */}
                    <IonBackButton defaultHref="/courses/list" />
                </IonButtons>
                <IonTitle>All Goals</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
            <h2>This works - All Goals!</h2>
        </IonContent>
        </IonPage>
    );
};

export default AllGoals;

