import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { list, documentText, grid, home, homeOutline, documentTextOutline, gridOutline, listOutline } from 'ionicons/icons';
import { Redirect, Route, useLocation } from 'react-router';
import './Tabs.css';
import Home from './Tabs/1 - Home';
import Services from './Tabs/2 - Services';
import Quote from './Tabs/4 - Quote';
import Gallery from './Tabs/3 - Gallery';

const Tabs: React.FC = () => {
  const location = useLocation();
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/quote">
          <Quote />
        </Route>
        <Redirect to="/home" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon aria-hidden="true" icon={location.pathname === "/home" || location.pathname === "/" ? home : homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="services" href="/services">
          <IonIcon aria-hidden="true" icon={location.pathname === "/services" ? list : listOutline} />
          <IonLabel>Services</IonLabel>
        </IonTabButton>
        <IonTabButton tab="gallery" href="/gallery">
          <IonIcon aria-hidden="true" icon={location.pathname === "/gallery" ? grid : gridOutline} />
          <IonLabel>Gallery</IonLabel>
        </IonTabButton>
        <IonTabButton tab="quote" href="/quote">
          <IonIcon aria-hidden="true" icon={location.pathname === "/quote" ? documentText : documentTextOutline} />
          <IonLabel>Quote</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
};

export default Tabs;
