import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components';

const Filter:React.FC<RouteComponentProps> = (props) => {
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
            <h2>The filter page...</h2>
        </IonContent>
    </IonPage>
  )
}

export default Filter