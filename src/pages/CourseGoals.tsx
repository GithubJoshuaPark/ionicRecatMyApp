import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import { COURSE_DATA } from "../mockUpdata/COURSE_DATA";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonBackButton,
  IonButtons,
  IonList,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonLoading,
  IonIcon,
  IonFabButton,
  IonFab,
  IonAlert,
  IonToast,
  IonFabList,
} from "@ionic/react";
import styled from "styled-components";
import "./CourseGoals.css";
import {
  add,
  addOutline,
  logoAngular,
  logoChrome,
  logoFacebook,
  logoGithub,
  logoIonic,
  logoJavascript,
  logoNpm,
  logoPwa,
  logoReact,
  logoTwitter,
  logoVimeo,
  logoYoutube,
} from "ionicons/icons";
import EditModal from "../components/EditModal";
import EditableGoal from "../components/EditableGoal";

const CourseGoals: React.FC<RouteComponentProps> = (props) => {
  // MARK: - Properties

  // page path variable로 전달된 (ex: /courses/:courseId 에서 courseId의 literal value)
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const [showLoading, setShowLoading] = useState(true);
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<any>();

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)

  // MARK: - Methods(Handlers)
  const backPageHandler = () => {
    props.history.goBack();
  };

  const startDeleteItemHandler = () => {
    setStartedDeleting(true);
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    console.log("[Deleting...]");
    setToastMessage("Deleted goal!");
    slidingOptionsRef.current?.closeOpened();  // <-- itemSliding element 가 열려있는 경우, 닫아준다
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("[startEditGoalHandler]...");

    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
    slidingOptionsRef.current?.closeOpened(); // <-- itemSliding element 가 열려있는 경우, 닫아준다
    if (!goal) {
      return;
    }

    setIsEditing(true);
    setSelectedGoal(goal);
  };

  const cancelEditGoalHandler = () => {
    console.log("[cancelEditGoalHandler]...");
    setIsEditing(false);
    setSelectedGoal(null);
  };

  const startAddGoalHandler = () => {
    console.log("[startAddGoalHandler]..");
    setIsEditing(true);
    setSelectedGoal(null);
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
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
      />
      <IonToast
        isOpen={!!toastMessage}
        duration={2000}
        message={toastMessage}
        position="bottom"
        onDidDismiss={() => {
          setToastMessage("");
        }}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are u sure?"
        message="Do u want to delete the goal? This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              console.log("[canceling...]");
              setStartedDeleting(false);
              slidingOptionsRef.current?.closeOpened();
            },
          },
          { text: "Yes", handler: deleteGoalHandler },
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
                <EditableGoal key={goal.id}
                              text={goal.text} 
                              slidingRef={slidingOptionsRef} 
                              onStartDelete={startDeleteItemHandler}
                              onStartEdit={startEditGoalHandler.bind(null, goal.id)}/>
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

          <IonFab vertical="center" horizontal="center">
            <IonFabButton>Share</IonFabButton>
            <IonFabList side="top">
              <IonFabButton>
                <IonIcon icon={logoFacebook} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoTwitter} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoYoutube} />
              </IonFabButton>
            </IonFabList>

            <IonFabList side="end">
              <IonFabButton>
                <IonIcon icon={logoPwa} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoNpm} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoIonic} />
              </IonFabButton>
            </IonFabList>

            <IonFabList side="bottom">
              <IonFabButton>
                <IonIcon icon={logoGithub} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoJavascript} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoAngular} />
              </IonFabButton>
            </IonFabList>

            <IonFabList side="start">
              <IonFabButton>
                <IonIcon icon={logoVimeo} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoChrome} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={logoReact} />
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </IonContent>
      </IonPage>
    </>
  );
};

export default CourseGoals;

const FabContainer = styled(IonFab)`
  //   margin-bottom: 50px;
`;
