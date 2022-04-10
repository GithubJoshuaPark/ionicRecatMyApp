import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import React from "react";
import { calculator, refresh } from "ionicons/icons";

import styled from 'styled-components';
import './BmiControls.css' 

// MARK: - For using react-fusioncharts component
// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const dataSource = {
    data: [
      { label: "Venezuela", value: "290" },
      { label: "Saudi", value: "260" },
      { label: "Canada", value: "180" },
      { label: "Iran", value: "140" },
      { label: "Russia", value: "115" },
      { label: "UAE", value: "100" },
      { label: "US", value: "30" },
      { label: "China", value: "30" }
    ],
    chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
    }
};

const chartConfigs = {
    type: "column2d",
    width: 600,
    height: 400,
    dataFormat: "json",
    dataSource: dataSource
};

const BmiControls: React.FC<{
  bmiFeagure: number | undefined;
  bimLevel: string;
}> = (props) => {
  return (
    <div>
      <IonCard id="result">
        <IonCardHeader>
          <IonCardSubtitle>
            비만도 결과: {props.bmiFeagure}&nbsp;
          </IonCardSubtitle>
          <IonCardTitle>BMI 지수: {props.bimLevel}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonIcon icon={calculator} slot="start" />
                체질량지수는 자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값입니다.<br/>
                체질량지수는 근육량, 유전적 원인, 다른 개인적 차이를 반영하지 못하는<br/>
                단점이 있음에도 불구하고 조사자들이나 의료인들이 가장 많이 쓰는 방법<br/>
                중 하나입니다.<br/>
                <IonIcon icon={refresh} slot="end" />
              </IonCol>
            </IonRow>
          </IonGrid>

        </IonCardContent>

      </IonCard>

      <ChartArea>
        <ReactFC {...chartConfigs} />
      </ChartArea>

    </div>
  );
};

export default BmiControls;

const ChartArea = styled.div`
    margin: auto;
    width: 80vw;
    height: 50vw;
    overflow: auto;
    text-align: center;
`
