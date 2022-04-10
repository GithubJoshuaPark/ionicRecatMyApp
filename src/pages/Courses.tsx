import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";

const COURSE_DATA = [
    { id: 'c1', title: 'Ionic + Recat - The Practical Guide1'},
    { id: 'c2', title: 'ReactJS - The Practical Guide2'},
    { id: 'c3', title: 'TypeScript - The Practical Guide3'},
    { id: 'c4', title: 'Ionic + Recat - The Practical Guide4'},
    { id: 'c5', title: 'Ionic + Recat - The Practical Guide5'},
];

const Courses: React.FC<RouteComponentProps> = (props) => {
    // const history = useHistory();
    
    const fabClickHandler = (e: any) => {
        console.log(`🍎 ~ file: Courses.tsx ~ line 8 ~ goToNewClickHandler ~ e`, e);
        props.history.push("/course-goal");
    }

    const goToDetail = () => {
        props.history.push("/course-goal");
    }

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTitle>Courses</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
            <h2>This works - Courses page!</h2>

            {/* <div>
            <IonButton routerLink="/course-goal">To Course Goals</IonButton>
            </div> */}

            <IonGrid>
                {COURSE_DATA.map(course => (
                    <IonRow key={course.id}>
                        <IonCol size-md="4" offset-md="4">
                            <IonCard>
                                <IonCardContent>
                                    <h2 className="ion-text-center">{course.title}</h2>
                                    <IonButton onClick={goToDetail}>View Details</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                ))}

            </IonGrid>


            <FabContainer vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={fabClickHandler}>
                    <IonIcon icon={add} />
                </IonFabButton>
            </FabContainer>
        </IonContent>
        </IonPage>
    );
};

export default Courses;

const FabContainer = styled(IonFab)`
//   margin-bottom: 50px;
`;
