import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
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
import { informationCircle, star } from "ionicons/icons";
import BmiControls from "../components/BmiControls";
import BmiCheck from "../components/BmiCheck";
import BmiInputControl from "../components/BmiInputControl";

const NewItem: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const myHeight = useRef<HTMLIonInputElement>(null);
  const myWeight = useRef<HTMLIonInputElement>(null);

  const [bmiFeagure, setBmiFeagure] = useState<number>();
  const [bimLevel, setBmiLevel] = useState<string>();

  const [error, setError] = useState<string>();

  const [showToast1, setShowToast1] = useState(false);

  const [calcUnit, setCalcUnit] = useState<'mkg' | 'ftlbs'>('mkg');

  const heightFactor = calcUnit === 'mkg' ? 1 : 0.0328084;
  const weightFactor = calcUnit === 'mkg' ? 1 : 2.20462;

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

    const enterH = +enteredHeight / heightFactor;
    const enterW = +enteredWeight / weightFactor;

    const bmiFeagure = Math.floor(
      +enterW / (((+enterH / 100) * +enterH) / 100)
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
    restHandler();
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
            <IonBackButton defaultHref="/courses/home" />
          </IonButtons>
          <IonTitle>나의 체질량지수(BMI)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3" className="ion-no-padding">
              <IonCard>
                <IonCardContent>
                  <IonGrid >
                  <BmiInputControl selectedValue={calcUnit} onSegChanged={segChanged}/>
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
                          <IonLabel position="floating">My Weight ({calcUnit === 'mkg' ? 'kg': 'lbs'}): </IonLabel>
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
                </IonCardContent>
              </IonCard>

            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {bimLevel && (<BmiControls bmiFeagure={bmiFeagure} bimLevel={bimLevel}/>)}
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonToast
            isOpen={showToast1}
            onDidDismiss={() => setShowToast1(false)}
            message={error}
            icon={informationCircle}
            position="middle"
            buttons={[
            {
                side: 'start',
                icon: star,
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