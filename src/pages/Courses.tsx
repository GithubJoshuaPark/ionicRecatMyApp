import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonPage,
  IonToolbar,
  IonButtons,
  IonCol,
  IonGrid,
  IonRow,
  IonMenuButton,
} from "@ionic/react";
import { add, addOutline } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import { COURSE_DATA } from "../mockUpdata/COURSE_DATA";

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
                        {/* <IonCard>
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
                        </IonCard> */}

                        <CourseItem title={course.title}
                                    enrollMentDate={course.enrolled.toLocaleDateString("kr-KR", {
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "2-digit",})}
                                    goToDetail={goToDetail.bind(null,course)}   />
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
