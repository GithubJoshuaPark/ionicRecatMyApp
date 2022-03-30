import {
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { analytics, barbell } from "ionicons/icons";

const BmiInputControl: React.FC<{
  selectedValue: 'mkg' | 'ftlbs';
  onSegChanged: (value: 'mkg' | 'ftlbs') => void;
}> = (props) => {

  function segItemChanged(e:CustomEvent) {
    console.log(e.detail.value);
    props.onSegChanged(e.detail.value);
  }

  return (
    <div>
      {/*-- Segment in a toolbar --*/}
      <IonToolbar>
        <IonSegment
          value={props.selectedValue}
          onIonChange={(e) => (segItemChanged(e))}
        >
          <IonSegmentButton value="mkg">
            <IonIcon icon={barbell} />
          </IonSegmentButton>
          <IonSegmentButton value="ftlbs">
            <IonIcon icon={analytics} />
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </div>
  );
};

export default BmiInputControl;
