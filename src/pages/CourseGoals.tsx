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
  IonIcon,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonFabButton,
  IonFab,
  IonAlert,
} from "@ionic/react";
import styled from "styled-components";
import { COURSE_DATA } from "./Courses";
import "./CourseGoals.css";
import { add, addOutline, trash } from "ionicons/icons";

const CourseGoals: React.FC<RouteComponentProps> = (props) => {

  // MARK: - Properties
  // page path variable로 전달된 (ex: /courses/:courseId 에서 courseId의 literal value)
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const [showLoading, setShowLoading] = useState(true);
  const [startedDeleting, setStartedDeleting] = useState(false);

  // MARK: - Methods(Handlers)
  const backPageHandler = () => {
    props.history.goBack();
  };

  const startDeleteItemHandler = () => {
    setStartedDeleting(true);
  };

  const deleteGoalHandler = () => {
      setStartedDeleting(false);
      console.log("[Deleting...]")
  }

  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("[startEditGoalHandler]...");
  };

  const startAddGoalHandler = () => {
    console.log("[startAddGoalHandler]..");
  };

  // MARK: - LifeCycle
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

  useEffect(() => {
    console.log("[useEffect]...");
    setTimeout(() => {
      setShowLoading(false);
      console.log("setTimeout....setShowLoading...");
    }, 1000);
  }, []);

  // MARK: - Rendering Template
  return (
    // Fragments는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화
    <>
        <IonAlert isOpen={startedDeleting}
                  header="Are u sure?"
                  message="Do u want to delete the goal? This cannot be undone."
                  buttons={[
                      {text: 'No', role: 'cancel', handler: () => {
                          setStartedDeleting(false)
                      }},
                      {text: 'Yes', handler: deleteGoalHandler}
                  ]}
        />
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref="/courses/list" />
            </IonButtons>
            <IonTitle>
                {selectedCourse ? selectedCourse?.title : "No course found!"}
            </IonTitle>
            {
                <IonButtons slot="end" onClick={startAddGoalHandler}>
                <IonIcon slot="icon-only" icon={addOutline} />
                </IonButtons>
            }
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
                    <IonItemOption
                        onClick={startDeleteItemHandler}
                        color="danger"
                    >
                        <IonIcon slot="icon-only" icon={trash} />
                    </IonItemOption>
                    </IonItemOptions>

                    <IonItem lines="full">
                    <IonLabel>{goal.text}</IonLabel>
                    </IonItem>

                    <IonItemOptions side="end">
                    <IonItemOption onClick={startEditGoalHandler}>
                        <IonIcon slot="icon-only" icon={addOutline} />
                    </IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
                ))}
            </IonList>
            )}

            {
            <FabContainer vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={startAddGoalHandler}>
                <IonIcon icon={add} />
                </IonFabButton>
            </FabContainer>
            }
        </IonContent>
        </IonPage>
    </>

  );
};

export default CourseGoals;

const FabContainer = styled(IonFab)`
  //   margin-bottom: 50px;
`;
