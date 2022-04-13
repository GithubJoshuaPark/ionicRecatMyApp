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
import { add, addOutline } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import AddCourseModal from "../components/AddCourseModal";
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
        {id: 'c5g1', text: 'c5g1: Finish the course!'},
        {id: 'c5g2', text: 'c5g2: Learn a lot!'},
        {id: 'c5g3', text: 'c5g3: Finish the course!'},
        {id: 'c5g4', text: 'c5g4: Learn a lot!'},
        {id: 'c5g5', text: 'c5g5: Finish the course!'},
        {id: 'c5g6', text: 'c5g6: Learn a lot!'},
        {id: 'c5g7', text: 'c5g7: Finish the course!'},
        {id: 'c5g8', text: 'c5g8: Learn a lot!'},
        {id: 'c5g9', text: 'c5g9: Finish the course!'},
        {id: 'c5g10', text: 'c5g10: Learn a lot!'},
        {id: 'c5g11', text: 'c5g11: Finish the course!'},
        {id: 'c5g12', text: 'c5g12: Learn a lot!'},
        {id: 'c5g13', text: 'c5g13: Finish the course!'},
        {id: 'c5g14', text: 'c5g14: Learn a lot!'},
        {id: 'c5g15', text: 'c5g15: Finish the course!'},
        {id: 'c5g16', text: 'c5g16: Learn a lot!'},
        {id: 'c5g17', text: 'c5g17: Learn a lot!'},
        {id: 'c5g18', text: 'c5g18: Finish the course!'},
        {id: 'c5g19', text: 'c5g19: Learn a lot!'},
        {id: 'c5g20', text: 'c5g20: Finish the course!'},
        {id: 'c5g21', text: 'c5g21: Learn a lot!'},
        {id: 'c5g22', text: 'c5g22: Learn a lot!'},
        {id: 'c5g23', text: 'c5g23: Finish the course!'},
        {id: 'c5g24', text: 'c5g24: Learn a lot!'},
        {id: 'c5g25', text: 'c5g25: Finish the course!'},
        {id: 'c5g26', text: 'c5g26: Learn a lot!'},
        {id: 'c5g27', text: 'c5g27: Learn a lot!'},
        {id: 'c5g28', text: 'c5g28: Finish the course!'},
        {id: 'c5g29', text: 'c5g29: Learn a lot!'},
        {id: 'c5g30', text: 'c5g30: Finish the course!'},
    ]
  },
];

// RouteComponentProps는 history, location, match 정보를 가진 인터페이스로서 라우트 정보를 담고 있다.
const Courses: React.FC<RouteComponentProps> = (props) => {
  // const history = useHistory(); // can be used instead of RouteComponentProps props

  const [isAddGoalModalShow, setIsAddGoalModalShow] = useState(false)
  
//   const fabClickHandler = (e: any) => {
//     console.log(`🍎 ~ file: Courses.tsx ~ line 8 ~ goToNewClickHandler ~ e`, e);
//     props.history.push("/courses/all-goals");
//   };

  const goToDetail = (course:any, e: React.MouseEvent) => {
    console.log(`🍎 ~ file: Courses.tsx ~ line 85 ~ goToDetail ~ course.id, e`, course.id);
    props.history.push(`/courses/${course.id}`);
  };

  const startAddGoalHandler = () => {
    setIsAddGoalModalShow(true)
  }

  const cancelAddGoalHandler = () => {
    console.log("[cancelAddGoalHandler]...");
    setIsAddGoalModalShow(false);
  };

  return (
    <>
        <AddCourseModal show={isAddGoalModalShow} onCancel={cancelAddGoalHandler}/>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Courses</IonTitle>
                <IonButtons slot="end" onClick={startAddGoalHandler}>
                    <IonIcon slot="icon-only" icon={addOutline} />
                </IonButtons>
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
                                // make a function that binds to get parameters   
                                onClick={goToDetail.bind(null,course)}
                                // routerLink={`/courses/${course.id}`}
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
                <IonFabButton onClick={startAddGoalHandler}>
                    <IonIcon icon={add} />
                </IonFabButton>
                </FabContainer>
            </IonContent>
        </IonPage>
    </>  

  );
};

export default Courses;

const FabContainer = styled(IonFab)`
  //   margin-bottom: 50px;
`;
