import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';
import React from 'react'

const CourseItem: React.FC<{
    title: string;
    enrollMentDate: string;
    goToDetail: (e: React.MouseEvent) => void;
}> = (props) => {
  return (

      <IonCard>
        <IonCardHeader className="ion-text-center">
            <IonCardTitle>{props.title}</IonCardTitle>
            <IonCardSubtitle>
                Enrolled on{" "}
                {props.enrollMentDate}
            </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            <div className="ion-text-right">
            <IonButton
                // make a function that binds to get parameters   
                onClick={props.goToDetail}
                fill="clear"
                color="primary"
            >
                View Goals
            </IonButton>
            </div>
        </IonCardContent>
      </IonCard>
  )
}

export default CourseItem;