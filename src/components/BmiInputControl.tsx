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
            <span><IonIcon icon={barbell} />&nbsp;cm/kg</span>
          </IonSegmentButton>
          <IonSegmentButton value="ftlbs">
            <span><IonIcon icon={analytics} />&nbsp;ft/lbs</span>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </div>
  );
};

export default BmiInputControl;
