import {
  IonBadge,
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Home.css";
import { add } from 'ionicons/icons';
import { RouteComponentProps } from "react-router";

const checkboxList = [
  {val: 'Pepperoni', isChecked: true},
  {val: 'Sausage', isChecked: false},
  {val: 'Mushroom', isChecked: false}
];

const Home: React.FC<RouteComponentProps> = (props) => {

  const [checked, setChecked] = useState(false);

  function checkboxChangeHandler(e: any) {
    console.log(e.target.value);
  }

  function fabClickHandler(e: any) {
    console.log(`🍎 ~ file: Home.tsx ~ line 37 ~ fabClickHandler ~ e`, e);
    props.history.push('/new');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start"/>
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Brandy</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">5 Days</IonBadge> 
          </IonItem>

          <IonItemDivider>Default Checkbox</IonItemDivider>
          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)}/>
          </IonItem>

          <IonItemDivider>Checkbox Colors</IonItemDivider>
          <IonItem>
            <IonCheckbox slot="end" disabled={true}/>
          </IonItem>

          <IonItemDivider>Checkbox Colors</IonItemDivider>
          <IonItem>
            <IonCheckbox slot="end" color="primary"></IonCheckbox>
            <IonCheckbox slot="end" color="secondary"></IonCheckbox>
            <IonCheckbox slot="end" color="danger"></IonCheckbox>
            <IonCheckbox slot="end" color="light"></IonCheckbox>
            <IonCheckbox slot="end" color="dark"></IonCheckbox>
          </IonItem>

          <IonItemDivider>Checkbox in a List</IonItemDivider>
          {
            checkboxList.map(({val, isChecked}, i) => (
              <IonItem key={i}>
                <IonLabel>{val}</IonLabel>
                <IonCheckbox slot="end" value={isChecked} onIonChange={checkboxChangeHandler}></IonCheckbox>
              </IonItem>
            ))
          }

        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={fabClickHandler}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;
