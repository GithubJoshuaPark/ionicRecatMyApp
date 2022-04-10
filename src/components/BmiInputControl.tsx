import {
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
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
    console.log(`🍎 ~ file: BmiInputControl.tsx ~ line 16 ~ segItemChanged ~ e`, e.detail.value);
    props.onSegChanged(e.detail.value);
  }

  return (
    <div>
      {/*-- Segment in a toolbar --*/}

        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3" className="ion-no-padding">
            <IonSegment
                value={props.selectedValue}
                onIonChange={(e) => (segItemChanged(e))}>
              <IonSegmentButton value="mkg">
                <span><IonIcon icon={barbell} />&nbsp;cm/kg</span>
              </IonSegmentButton>
              <IonSegmentButton value="ftlbs">
                <span><IonIcon icon={analytics} />&nbsp;ft/lbs</span>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
        </IonRow>


    </div>
  );
};

export default BmiInputControl;
