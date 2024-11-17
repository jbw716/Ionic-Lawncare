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
        <Route exact path="/tabs/home">
          <Home />
        </Route>
        <Route exact path="/tabs/services">
          <Services />
        </Route>
        <Route exact path="/tabs/gallery">
          <Gallery />
        </Route>
        <Route exact path="/tabs/quote">
          <Quote />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon aria-hidden="true" icon={location.pathname === "/tabs/home" || location.pathname === "/tabs" ? home : homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="services" href="/tabs/services">
          <IonIcon aria-hidden="true" icon={location.pathname === "/tabs/services" ? list : listOutline} />
          <IonLabel>Services</IonLabel>
        </IonTabButton>
        <IonTabButton tab="gallery" href="/tabs/gallery">
          <IonIcon aria-hidden="true" icon={location.pathname === "/tabs/gallery" ? grid : gridOutline} />
          <IonLabel>Gallery</IonLabel>
        </IonTabButton>
        <IonTabButton tab="quote" href="/tabs/quote">
          <IonIcon aria-hidden="true" icon={location.pathname === "/tabs/quote" ? documentText : documentTextOutline} />
          <IonLabel>Quote</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
};

export default Tabs;
