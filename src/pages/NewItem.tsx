import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { calculator, informationCircle, refresh } from "ionicons/icons";
import BmiControls from "../components/BmiControls";
import BmiCheck from "../components/BmiCheck";
import BmiInputControl from "../components/BmiInputControl";
// import styled from "styled-components";

const NewItem: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const myHeight = useRef<HTMLIonInputElement>(null);
  const myWeight = useRef<HTMLIonInputElement>(null);

  const [bmiFeagure, setBmiFeagure] = useState<number>();
  const [bimLevel, setBmiLevel] = useState<string>();

  const [error, setError] = useState<string>();

  const [showToast1, setShowToast1] = useState(false);

  const [calcUnit, setCalcUnit] = useState<'mkg' | 'ftlbs'>('mkg');

  function caclHandler() {
    console.log(`🍎 ~ file: NewItem.tsx ~ line 9 ~ fabClickHandler ~ e`);
    setChecked(!checked);
    const enteredHeight = myHeight.current?.value;
    const enteredWeight = myWeight.current?.value;

    if (!enteredHeight || !enteredWeight || +enteredHeight < 0 || +enteredWeight < 0)
    { 
        setError('유효한 숫자를 넣어주세요');
        setShowToast1(true);
        return;
    }

    const bmiFeagure = Math.floor(
      +enteredWeight / (((+enteredHeight / 100) * +enteredHeight) / 100)
    );
    setBmiFeagure(bmiFeagure);

    if (bmiFeagure >= 25) {
      setBmiLevel("Obesity");
    } else if (bmiFeagure >= 23) {
      setBmiLevel("Over Weight");
    } else if (bmiFeagure >= 18.5) {
      setBmiLevel("Normal");
    } else {
      setBmiLevel("Low Weight");
    }
  }

  function segChanged(value: 'mkg' | 'ftlbs') {
    console.log(`🍎 ~ file: NewItem.tsx ~ line 76 ~ segChanged ~ value`, value);
    setCalcUnit(value);
  }

  function restHandler() {
    console.log(`🍎 ~ file: NewItem.tsx ~ line 9 ~ fabClickHandler ~ e`);
    setChecked(!checked);
    myHeight.current!.value = "";
    myWeight.current!.value = "";
    setBmiLevel('');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>나의 체질량지수(BMI)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <BmiInputControl selectedValue={calcUnit} onSegChanged={segChanged}/>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">My Height ({calcUnit === 'mkg' ? 'cm': 'ft'}): </IonLabel>
                <IonInput
                  ref={myHeight}
                  clear-input={true}
                  color="primary"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">My Weight ({calcUnit === 'mkg' ? 'kg': 'bl'}): </IonLabel>
                <IonInput
                  ref={myWeight}
                  clear-input={true}
                  color="secondary"
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BmiCheck onCaclHandler={caclHandler} onRestHandler={restHandler}/>
        </IonGrid>

        {bimLevel && (<BmiControls bmiFeagure={bmiFeagure} bimLevel={bimLevel}/>)}
        
        <IonToast
            isOpen={showToast1}
            onDidDismiss={() => setShowToast1(false)}
            message={error}
            icon={informationCircle}
            position="middle"
            buttons={[
            {
                side: 'start',
                icon: 'star',
                text: '다시입력',
                handler: () => {
                console.log('Favorite clicked');
                }
            },
            {
                text: '취소',
                role: 'cancel',
                handler: () => {
                console.log('Cancel clicked');
                }
            }
            ]}
        />

      </IonContent>
    </IonPage>
  );
};

export default NewItem;