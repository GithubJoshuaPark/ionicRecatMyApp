import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPopover,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { format, parseISO } from 'date-fns';

const AddCourseModal: React.FC<{
  show: boolean;
  onCancel: () => void;
}> = (props) => {

  const [popoverDate, setPopoverDate] = useState('');
  
  const formatDate = (value: string) => {
    return format(parseISO(value), 'MMM dd yyyy');
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Course Title</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              {/* Datetime in popover with cover element */}
              <IonItem button={true} id="open-date-input">
                <IonLabel>Enroll Date</IonLabel>
                <IonText slot="end">{popoverDate}</IonText>
                <IonPopover trigger="open-date-input" 
                            side="right"
                            showBackdrop={false}>
                  <IonDatetime
                    locale="ko-KR"
                    presentation="date"
                    onIonChange={ev => setPopoverDate(formatDate(ev.detail.value!))}
                  />
                </IonPopover>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton fill="clear" color="dark" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" color="secondary">
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddCourseModal;
