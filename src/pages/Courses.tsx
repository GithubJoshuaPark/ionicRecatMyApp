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
import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import { COURSE_DATA } from "../mockUpdata/COURSE_DATA";
import { format, parseISO } from "date-fns";
import CoursesContext from "../data/courses-context";

// RouteComponentProps는 history, location, match 정보를 가진 인터페이스로서 라우트 정보를 담고 있다.
const Courses: React.FC<RouteComponentProps> = (props) => {
  // const history = useHistory(); // can be used instead of RouteComponentProps props

  const coursesCtx = useContext(CoursesContext);

  const formatDate = (value: string) => {
    return format(parseISO(value), "yyyy-MM-dd");
  };

  const [isAddGoalModalShow, setIsAddGoalModalShow] = useState(false)
  
  const goToDetail = (course:any) => {
    console.log(`🍎 ~ file: Courses.tsx ~ line 36 ~ goToDetail ~ course.id, e`, course.id);
    props.history.push(`/courses/${course.id}`);
  };

  const startAddGoalHandler = () => {
    setIsAddGoalModalShow(true)
  }

  const cancelAddGoalHandler = () => {
    console.log("[cancelAddGoalHandler]...");
    setIsAddGoalModalShow(false);
  };

  const onSave = (title: string, selectedDate: Date) => {
    console.log(`🍎 ~ file: Courses.tsx ~ line 50 ~ onSave ~ 
              title: ${title}, 
              selectedDate: ${formatDate(selectedDate.toISOString())}`);
    
    coursesCtx.addCourse(title, selectedDate);
    setIsAddGoalModalShow(false);
  }

  return (
    <>
        <AddCourseModal show={isAddGoalModalShow} 
                        onCancel={cancelAddGoalHandler}
                        onSave={onSave}/>
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
                <IonGrid>
                  {coursesCtx.courses.map((course) => (
                      <IonRow key={course.id}>
                      <IonCol size-md="4" offset-md="4">
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

