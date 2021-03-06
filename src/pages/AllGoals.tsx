import {
  IonContent,
  IonHeader,
  IonTitle,
  IonPage,
  IonToolbar,
  IonButtons,
  IonLoading,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonInput,
} from "@ionic/react";
import { search } from "ionicons/icons";
import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router";
import CoursesContext from "../data/courses-context";

const AllGoals: React.FC<RouteComponentProps> = (props) => {

    const [showLoading, setShowLoading] = useState(true);
    const coursesCtx = useContext(CoursesContext);
    
    // get all goals using map/reduce
    let goals = coursesCtx.courses.filter(course => course.included === true).map(course => {
                    return course.goals.map(goal => {
                        return {...goal, courseTitle: course.title}
                    })
                }).reduce((acGoals, curGoals) => {
                    let addedGoals = acGoals
                    for(const goal of curGoals) {
                        addedGoals = addedGoals.concat(goal)
                    }
                    return addedGoals
                }, [])

    console.log(`đ ~ file: AllGoals.tsx ~ line 26 ~ goals`, goals);

    return (
        <>
            <IonLoading
                cssClass="my-custom-class"
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={"Please wait..."}
                duration={500}
            />
            {<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/> 
                        {/* make side menu shown in toggle */}
                        {/* <IonBackButton defaultHref="/courses/list" /> */}
                    </IonButtons>
                    <IonTitle>ęł ę°íě§ě§ë¨(All Goals)</IonTitle>
                </IonToolbar>
                <IonToolbar color="secondary">
                    {/*-- Segment with anchors --*/}
                    <IonSegment scrollable
                                    select-on-focus
                                    swipe-gesture
                                    value="qualityInfo"
                                    onIonChange={e => console.log('Segment selected', e.detail.value)}>
                        <IonSegmentButton value="qualityInfo">
                            <IonLabel>ęł ę°<br/>íě§ě ëł´</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="qmsInfo">
                            <IonLabel>QMS</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="speedLimit">
                            <IonLabel>ěë<br/>ě íě´ë Ľ</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="intervalQualityDiagnostic">
                            <IonLabel>ęľŹę°<br/>íě§ě§ë¨</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="ngis">
                            <IonLabel>ë§ě ëł´<br/>(NGIS)</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <IonItem color="secondary">
                                <IonLabel>ę°ěěě ëł´</IonLabel>
                            </IonItem>
                        </IonCol>
                        <IonCol size="8">
                            <IonItem>
                                <IonIcon icon={search} />
                                <IonInput type="text" placeholder="ę°ěěë˛í¸"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>


                {
                    goals.length === 0 &&
                    <h2 className="ion-text-center">No Goals Found!</h2>
                }
                {goals.length > 0 && <IonList>
                    {
                       goals.map((v, i) => (
                            <IonItem key={v.id}>
                                <IonLabel>
                                    <h2>{v.text}</h2>
                                    <p>{v.courseTitle}</p>
                                </IonLabel>
                               
                            </IonItem>
                       ))
                    }
                </IonList>}
            </IonContent>
            </IonPage>}
        </>

    );
};

export default AllGoals;

