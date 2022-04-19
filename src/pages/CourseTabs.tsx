import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { list, trophyOutline } from 'ionicons/icons'
import React from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router'
import AllGoals from './AllGoals'
import CourseGoals from './CourseGoals'
import Courses from './Courses'
import Home from './Home'
import NewItem from './NewItem'

// RouteComponentProps는 history, location, match 정보를 가진 인터페이스로서 라우트 정보를 담고 있다.
const CourseTabs:React.FC<RouteComponentProps> = (props) => {

    // const { match } = props
    return (
            // This Component is a kind of nested routerOutlet below the parent('/courses') 
            <IonTabs>
                {/* routerOutlet */}
                <IonRouterOutlet animated={true}>
                    {/* match.url: /courses */}
                    <Redirect path="/courses" to="/courses/all-goals" exact/> 
                    {/* <Redirect path={`${match.url}`} to={`${match.url}/home`} exact/>  */}
                    <Switch>
                        <Route exact path="/courses/home" component={Home} />
                        <Route exact path="/courses/all-goals" component={AllGoals} />
                        <Route exact path="/courses/new" component={NewItem} />
                        <Route exact path="/courses/list" component={Courses} />
                        <Route exact path="/courses/:courseId" component={CourseGoals} />
                        {/* <Route exact path="/filter" component={Filter} /> */}
                    </Switch>
                </IonRouterOutlet>

                {/* TabBars */}
                <IonTabBar slot='bottom'>
                    <IonTabButton tab="all-goals" href="/courses/all-goals">
                        <IonIcon icon={list} />
                        <IonLabel>고객품질</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="courses" href="/courses/list">
                        <IonIcon icon={trophyOutline} />
                        <IonLabel>실시간품질</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="courses" href="/courses/list">
                        <IonIcon icon={trophyOutline} />
                        <IonLabel>서비스이용</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
    )
}

export default CourseTabs