import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage } from '@ionic/react';
import { triangle, ellipse, square } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import './Tabs.css';
import Tab1 from './Tabs/1 - Home';
import Tab2 from './Tabs/2 - Services';
import Tab3 from './Tabs/4 - Pay';

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/tab1">
        <Tab1 />
      </Route>
      <Route exact path="/tab2">
        <Tab2 />
      </Route>
      <Route exact path="/tab3">
        <Tab3 />
      </Route>
      <Route exact path="/">
        <Redirect to="/tab1" />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tab1">
        <IonIcon aria-hidden="true" icon={triangle} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
        <IonIcon aria-hidden="true" icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tab3">
        <IonIcon aria-hidden="true" icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
