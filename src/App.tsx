import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, setupIonicReact, IonIcon, IonLabel, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NewItem from './pages/NewItem';
import Courses from './pages/Courses';
import CourseGoals from './pages/CourseGoals';
import { list, trophyOutline } from 'ionicons/icons';
import AllGoals from './pages/AllGoals';
import './theme/theme.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/new" component={NewItem} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/course-goal" component={CourseGoals} />
          <Route exact path="/all-goals" component={AllGoals} />
          <Redirect exact from="/" to="/courses" />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab="all-goals" href="/all-goals">
            <IonIcon icon={list} />
            <IonLabel>All Goals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="courses" href="/courses">
            <IonIcon icon={trophyOutline} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
