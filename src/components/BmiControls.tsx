import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import React from "react";
import { calculator, refresh } from "ionicons/icons";

const BmiControls: React.FC<{
  bmiFeagure: number | undefined;
  bimLevel: string;
}> = (props) => {
  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>비만도 결과: {props.bmiFeagure}</IonCardSubtitle>
          <IonCardTitle>BMI 지수: {props.bimLevel}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonIcon icon={calculator} slot="start" />
          체질량지수는 자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값입니다.
          체질량지수는 근육량, 유전적 원인, 다른 개인적 차이를 반영하지 못하는
          단점이 있음에도 불구하고 조사자들이나 의료인들이 가장 많이 쓰는 방법
          중 하나입니다.
          <IonIcon icon={refresh} slot="end" />
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default BmiControls;
