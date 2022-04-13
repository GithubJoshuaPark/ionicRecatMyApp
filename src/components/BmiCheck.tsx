import {
  IonButton,
  IonCol,
  IonIcon,
  IonRow,
} from "@ionic/react";
import React from "react";
import { calculator, refresh } from "ionicons/icons";

const BmiCheck: React.FC<{
  onCaclHandler: () => void; 
  onRestHandler: () => void;
}> = (props) => {
  return (
    <div>
      <IonRow className="ion-margin-top">
        <IonCol size="12" size-md="6" className="ion-text-center">
          <IonButton expand="block" fill="solid" color="secondary" onClick={props.onCaclHandler}>
            <IonIcon icon={calculator} slot="start"/>
            &nbsp; Calc MBI
          </IonButton>
        </IonCol>
        <IonCol size="12" size-md="6" className="ion-text-center">
          <IonButton expand="block" fill="outline" color="dark" onClick={props.onRestHandler}>
            <IonIcon icon={refresh} slot="start"/>
            &nbsp; Reset
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default BmiCheck;
