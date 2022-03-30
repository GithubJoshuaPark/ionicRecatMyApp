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
      <IonRow>
            <IonCol className="ion-text-left">
              <IonButton expand="block" fill="solid" onClick={props.onCaclHandler}>
                <IonIcon icon={calculator} />
                &nbsp; Calc MBI
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton expand="block" fill="solid" onClick={props.onRestHandler}>
                <IonIcon icon={refresh} />
                &nbsp; Reset
              </IonButton>
            </IonCol>
          </IonRow>
    </div>
  );
};

export default BmiCheck;
