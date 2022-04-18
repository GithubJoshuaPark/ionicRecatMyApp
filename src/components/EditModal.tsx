import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonInput,
  IonItem,
  IonLabel,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonText,
} from "@ionic/react";
import React, { useRef, useState } from "react";

const EditModal: React.FC<{
  show: boolean | false;
  onCancel: () => void;
  onSave: (goalText: string) => void;
  editedGoal: { id: string; text: string } | null;
}> = (props) => {
  // MARK: - LifeCycle
  //
  useIonViewWillEnter(() => {
    console.log("[EditModal] ionViewWillEnter event fired");
  });

  // called every time the view is navigated to (regardless if initialized or not),
  // it's a good method to load data from services.
  useIonViewDidEnter(() => {
    console.log("[EditModal] ionViewDidEnter event fired");
  });

  // Can be used for cleanup, like unsubscribing from data sources.
  useIonViewWillLeave(() => {
    console.log("[EditModal] ionViewWillLeave event fired");
  });

  // 페이지가 사용자에게 표시될 때까지 실행되지 않으므로 로딩 표시기나
  // 스켈레톤 화면을 사용하여 전환이 완료된 후 콘텐츠가 부자연스럽게 깜박이지 않도록 할 수 있습니다.
  useIonViewDidLeave(() => {
    console.log("EditModal] ionViewDidLeave event fired");
  });

  const [error, setError] = useState('');

  const textRef = useRef<HTMLIonInputElement>(null);

  const saveHandler = () => {
    const enteredText = textRef.current?.value;
    if(!enteredText || enteredText.toString().trim().length ===0 ) {
      setError('Please, enter a valid text as your goal');
      return;
    }
    props.onSave(enteredText.toString());
  }

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.editedGoal ? "Edit " : "Add "} Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Goal</IonLabel>
                <IonInput
                  type="text"
                  value={props.editedGoal?.text}
                  ref={textRef}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {
            error && <IonRow>
              <IonCol>
                <IonText color="danger">
                  <p>{error}</p>
                </IonText>
              </IonCol>
            </IonRow>
          }
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton color="dark" fill="clear" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default EditModal;
