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
import { gitNetworkOutline, pin, search } from "ionicons/icons";
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

    console.log(`🍎 ~ file: AllGoals.tsx ~ line 26 ~ goals`, goals);

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
                    <IonTitle>고객품질진단(All Goals)</IonTitle>
                </IonToolbar>
                <IonToolbar color="secondary">
                    {/*-- Segment with anchors --*/}
                    <IonSegment scrollable
                                    select-on-focus
                                    swipe-gesture
                                    value="qualityInfo"
                                    onIonChange={e => console.log('Segment selected', e.detail.value)}>
                        <IonSegmentButton value="qualityInfo">
                            <IonLabel>고객<br/>품질정보</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="qmsInfo">
                            <IonLabel>QMS</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="speedLimit">
                            <IonLabel>속도<br/>제한이력</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="intervalQualityDiagnostic">
                            <IonLabel>구간<br/>품질진단</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="ngis">
                            <IonLabel>망정보<br/>(NGIS)</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <IonItem color="secondary">
                                <IonLabel>가입자정보</IonLabel>
                            </IonItem>
                        </IonCol>
                        <IonCol size="8">
                            <IonItem>
                                <IonIcon icon={search} />
                                <IonInput type="text" placeholder="가입자번호"></IonInput>
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

