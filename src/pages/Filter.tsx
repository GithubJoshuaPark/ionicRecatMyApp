import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonToggle } from '@ionic/react';
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { COURSE_DATA } from '../mockUpdata/COURSE_DATA';

const Filter:React.FC<RouteComponentProps> = (props) => {
    const courseFilterChangeHandler = (e: CustomEvent) => {
        console.log(`🍎 ~ file: Filter.tsx ~ line 8 ~ courseFilterChangeHandler ~ e`, e);
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
                        COURSE_DATA.map(v => (
                            <IonItem key={v.id}>
                                <IonLabel>{v.title}</IonLabel>
                                <IonToggle value={v.id} onIonChange={courseFilterChangeHandler}/>
                            </IonItem>
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Filter