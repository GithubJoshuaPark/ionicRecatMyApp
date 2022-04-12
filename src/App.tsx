import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonMenuToggle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import './theme/theme.css';

import { list, options } from 'ionicons/icons';
import Filter from './pages/Filter';
import CourseTabs from './pages/CourseTabs';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      {/* IonMenu as the side menu */}
      {/* The menu element should be a sibling to the root content element. */}
      <IonMenu contentId='main'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Course Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {/* IonMenuToggle makes itself close just after routerLinked */}
            <IonMenuToggle> 
              <IonItem button routerLink='/courses/home' routerDirection='none'>
                <IonIcon slot="start" icon={options} />
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle> 
              <IonItem button routerLink='/courses/all-goals' routerDirection='none'>
                <IonIcon slot="start" icon={list} />
                <IonLabel>All Goals</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle> 
              <IonItem button routerLink='/filter' routerDirection='none'>
                <IonIcon slot="start" icon={options} />
                <IonLabel>Filter</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/filter" component={Filter} />

        {/* CourseTabs 가 nestedRouterLink를 가지고 있어, 
        CourseTabs 내부의 하위 link참조를 위해 exact prop은 사용하지 않음  */}
        <Route path="/courses" component={CourseTabs} />
        <Redirect to="/courses"/>
      </IonRouterOutlet>

    </IonReactRouter>

  </IonApp>
);

export default App;
