import React, { useContext, useEffect, useRef, useState } from "react";
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
  IonLoading,
  IonIcon,
  IonFabButton,
  IonFab,
  IonAlert,
  IonToast,
} from "@ionic/react";
import styled from "styled-components";
import "./CourseGoals.css";
import {
  add,
  addOutline,
} from "ionicons/icons";
import EditModal from "../components/EditModal";
import EditableGoal from "../components/EditableGoal";
import CoursesContext from "../data/courses-context";

const CourseGoals: React.FC<RouteComponentProps> = (props) => {
  // MARK: - Properties

  // page path variable로 전달된 (ex: /courses/:courseId 에서 courseId의 literal value)
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  const coursesCtx = useContext(CoursesContext);

  const selectedCourse = coursesCtx.courses.find(
    (c) => c.id === selectedCourseId
  );

  const [showLoading, setShowLoading] = useState(true);
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<any>();

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedGoalIdRef = useRef<string | null>(null);

  // MARK: - Methods(Handlers)
  const backPageHandler = () => {
    props.history.goBack();
  };

  const startDeleteItemHandler = (goalId: string) => {
    setStartedDeleting(true);
    selectedGoalIdRef.current = goalId;
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    console.log("[Deleting...]");
    coursesCtx.deleteGoal(selectedCourseId, selectedGoalIdRef.current!);
    setToastMessage("Deleted goal!");
    slidingOptionsRef.current?.closeOpened(); // <-- itemSliding element 가 열려있는 경우, 닫아준다
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
    setSelectedGoal(goal); // for update the goal
  };

  const cancelEditGoalHandler = () => {
    console.log("[cancelEditGoalHandler]...");
    setIsEditing(false);
    setSelectedGoal(null); //
  };

  const startAddGoalHandler = () => {
    console.log("[startAddGoalHandler]..");
    setIsEditing(true);
    setSelectedGoal(null);
  };

  const onSave = (enteredGoal: string) => {
    if (selectedGoal) {
      coursesCtx.updateGoal(selectedCourseId, selectedGoal.id, enteredGoal);
    } else {
      coursesCtx.addGoal(selectedCourseId, enteredGoal);
    }
    setIsEditing(false);
  };


  useEffect(() => {
    console.log("[useEffect]...");
    setTimeout(() => {
      setShowLoading(false);
      console.log("setTimeout....setShowLoading...");
    }, 1000);
  }, []);

  let content = <h2 className="ion-text-center">No Goal Found!</h2>
  if(!selectedCourse) {
    content = <h2 className="ion-text-center">No Course Found!</h2>
  }
  if(selectedCourse && selectedCourse.goals.length > 0) {
    content = (
      <IonList>
        {selectedCourse.goals.map((goal) => (
          <EditableGoal
            key={goal.id}
            text={goal.text}
            slidingRef={slidingOptionsRef}
            onStartDelete={startDeleteItemHandler.bind(null, goal.id)}
            onStartEdit={startEditGoalHandler.bind(null, goal.id)}
          />
        ))}
       </IonList>
    )
  }

  // MARK: - Rendering Template
  return (
    // Fragments는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화
    <>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        onSave={onSave}
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
          <IonLoading
            cssClass="my-custom-class"
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={"Please wait..."}
            duration={2000}
          />

          {content}

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
