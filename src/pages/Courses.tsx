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
  IonCardHeader,
  IonCardTitle,
  IonButtons,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonMenuButton,
  IonCardSubtitle,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import CourseGoals from './CourseGoals';

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + Recat - The Practical Guide1",
    enrolled: new Date("04/22/2022"),
    goals: [
        {id: 'c1g1', text: 'c1: Finish the course!'},
        {id: 'c1g2', text: 'c1: Learn a lot!'},
    ]
  },
  {
    id: "c2",
    title: "ReactJS - The Practical Guide2",
    enrolled: new Date("05/22/2022"),
    goals: [
        {id: 'c2g1', text: 'c2: Finish the course!'},
        {id: 'c2g2', text: 'c2: Learn a lot!'},
    ]
  },
  {
    id: "c3",
    title: "TypeScript - The Practical Guide3",
    enrolled: new Date("06/22/2022"),
    goals: [
        {id: 'c3g1', text: 'c3: Finish the course!'},
        {id: 'c3g2', text: 'c3: Learn a lot!'},
    ]
  },
  {
    id: "c4",
    title: "Ionic + Recat - The Practical Guide4",
    enrolled: new Date("07/22/2022"),
    goals: [
        {id: 'c4g1', text: 'c4: Finish the course!'},
        {id: 'c4g2', text: 'c4: Learn a lot!'},
    ]
  },
  {
    id: "c5",
    title: "Ionic + Recat - The Practical Guide5",
    enrolled: new Date("08/22/2022"),
    goals: [
        {id: 'c5g1', text: 'c5: Finish the course!'},
        {id: 'c5g2', text: 'c5: Learn a lot!'},
    ]
  },
];

// RouteComponentProps는 history, location, match 정보를 가진 인터페이스로서 라우트 정보를 담고 있다.
const Courses: React.FC<RouteComponentProps> = (props) => {
  // const history = useHistory(); // can be used instead of RouteComponentProps props

  const fabClickHandler = (e: any) => {
    console.log(`🍎 ~ file: Courses.tsx ~ line 8 ~ goToNewClickHandler ~ e`, e);
    props.history.push("/courses/all-goals");
  };

  const goToDetail = (e: any) => {
    console.log(`🍎 ~ file: Courses.tsx ~ line 85 ~ goToDetail ~ e.id: `, e.id);
    props.history.push(`/courses/${e.id}`);
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2>This works - Courses page!</h2>

        {/* <div>
            <IonButton routerLink="/all-goal">To Course Goals</IonButton>
            </div> */}

        <IonGrid>
          {COURSE_DATA.map((course) => (
            <IonRow key={course.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardHeader className="ion-text-center">
                    <IonCardTitle>{course.title}</IonCardTitle>
                    <IonCardSubtitle>
                      Enrolled on{" "}
                      {course.enrolled.toLocaleDateString("kr-KR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="ion-text-right">
                      <IonButton
                        // onClick={(course) => goToDetail(course)}
                        routerLink={`/courses/${course.id}`}
                        fill="clear"
                        color="primary"
                      >
                        View Details
                      </IonButton>
                    </div>
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
