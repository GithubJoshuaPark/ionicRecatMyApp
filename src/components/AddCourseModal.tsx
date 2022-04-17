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
import React, { useRef, useState } from "react";
import { format, parseISO } from "date-fns";

const AddCourseModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {

  const [error, setError] = useState('');

  const titleRef = useRef<HTMLIonInputElement>(null);

  const [popoverDate, setPopoverDate] = useState("");

  const formatDate = (value: string) => {
    return format(parseISO(value), "yyyy-MM-dd");
  };

  const openDateTimeEventHandler = () => {
    setPopoverDate("");
  };

  const saveHandler = () => {
    const enteredTitle = titleRef.current?.value;

    if (
      !enteredTitle ||
      !popoverDate ||
      enteredTitle.toString().trim().length === 0 ||
      popoverDate.trim().length === 0
    ) {
      console.log(`🍎 ~ file: AddCourseModal.tsx ~ line 51 ~ saveHandler ~ enteredTitle`, enteredTitle);
      console.log(`🍎 ~ file: AddCourseModal.tsx ~ line 52 ~ saveHandler ~ popoverDate`, popoverDate);
      
      setError('Please enter a valid title and select a valid date');
      return;
    }

    console.log(`🍎 ~ file: AddCourseModal.tsx ~ line 56 ~ saveHandler ~ allOk: ${enteredTitle} ${popoverDate}`) ;
    setError('');
    props.onSave(enteredTitle.toString(), new Date(popoverDate))
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
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              {/* Datetime in popover with cover element */}
              <IonItem
                button={true}
                id="open-date-input"
                onClick={openDateTimeEventHandler}
              >
                <IonLabel>Enroll Date</IonLabel>
                <IonText slot="end">{popoverDate}</IonText>
                <IonPopover
                  trigger="open-date-input"
                  side="right"
                  showBackdrop={false}
                >
                  {!popoverDate && (
                    <IonDatetime
                      locale="ko-KR"
                      presentation="date"
                      onIonChange={(ev) =>
                        setPopoverDate(formatDate(ev.detail.value!))
                      }
                    />
                  )}
                </IonPopover>
              </IonItem>
            </IonCol>
          </IonRow>
          {
            error && (
              <IonRow>
                <IonCol>
                  <IonText color="danger">
                    <p>{error}</p>
                  </IonText>
                </IonCol>
              </IonRow>
            )
          }
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton fill="clear" color="dark" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" color="secondary" onClick={saveHandler}>
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
