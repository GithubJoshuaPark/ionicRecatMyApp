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
} from "@ionic/react";
import React from "react";

const EditModal: React.FC<{
  show: boolean | false;
  onCancel: () => void;
  editedGoal: {id: string; text: string} | null;
}> = (props) => {
  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{props.editedGoal ? 'Edit ' : 'Add '} Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Goal</IonLabel>
                <IonInput type="text" value={props.editedGoal?.text}/>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton color="dark" fill="clear" onClick={props.onCancel}>Cancel</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block">Save</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default EditModal;
