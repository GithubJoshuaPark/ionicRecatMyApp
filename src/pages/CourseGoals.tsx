import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonLoading,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from "@ionic/react";
import { COURSE_DATA } from "./Courses";
import "./CourseGoals.css";
import { add, create, trash } from "ionicons/icons";

const CourseGoals: React.FC<RouteComponentProps> = (props) => {
  // page path variable로 전달된 (ex: /courses/:courseId 에서 courseId의 literal value)
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  //   const [present, dismiss] = useIonLoading();
  const [showLoading, setShowLoading] = useState(true);

  const backPageHandler = () => {
    props.history.goBack();
  };

  // called every time the view is navigated to (regardless if initialized or not),
  // it's a good method to load data from services.
  useIonViewDidEnter(() => {
    console.log("ionViewDidEnter event fired");
  });

  // 페이지가 사용자에게 표시될 때까지 실행되지 않으므로 로딩 표시기나
  // 스켈레톤 화면을 사용하여 전환이 완료된 후 콘텐츠가 부자연스럽게 깜박이지 않도록 할 수 있습니다.
  useIonViewDidLeave(() => {
    console.log("ionViewDidLeave event fired");
  });

  //
  useIonViewWillEnter(() => {
    console.log("ionViewWillEnter event fired");
  });

  // Can be used for cleanup, like unsubscribing from data sources.
  useIonViewWillLeave(() => {
    console.log("ionViewWillLeave event fired");
  });

  const deleteItemHandler = () => {
    console.log("[Deleted]...");
  };

  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log("[startEditGoalHandler]...");
  };

  useEffect(() => {
    console.log("[useEffect]...");
    setTimeout(() => {
      setShowLoading(false);
      console.log("setTimeout....setShowLoading...");
    }, 1000);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse?.title : "No course found!"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <h2>This Works - course goal!!</h2>
                <div>
                <IonButton onClick={backPageHandler}>To Go Back</IonButton>
                </div> */}

        <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          duration={2000}
        />

        {selectedCourse && (
          <IonList>
            {selectedCourse.goals.map((goal) => (
                <IonItemSliding key={goal.id}>

                    <IonItemOptions side="start">
                        <IonItemOption onClick={deleteItemHandler} color="danger">
                            <IonIcon slot="icon-only" icon={trash}/>
                        </IonItemOption>
                    </IonItemOptions>

                    <IonItem 
                             lines="full"
                            // button 
                            // onClick={deleteItemHandler}
                    >
                        <IonLabel>{goal.text}</IonLabel>
                        {/* <IonButton
                        fill="clear"
                        color="dark"
                        slot="end"
                        onClick={startEditGoalHandler}
                        >
                        <IonIcon slot="icon-only" icon={create} />
                        </IonButton> */}
                    </IonItem>

                    <IonItemOptions side="end">
                        <IonItemOption onClick={startEditGoalHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>

                </IonItemSliding>

            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
function userEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
