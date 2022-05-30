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
  IonText,
} from "@ionic/react";
import React, { useRef, useState } from "react";

const EditModal: React.FC<{
  show: boolean | false;
  onCancel: () => void;
  onSave: (goalText: string) => void;
  editedGoal: { id: string; text: string } | null;
}> = (props) => {

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
