import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, list, documentText, grid } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import './Tabs.css';
import Home from './Tabs/1 - Home';
import Services from './Tabs/2 - Services';
import Quote from './Tabs/4 - Quote';
import Gallery from './Tabs/3 - Gallery';

const Tabs: React.FC = () => (
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
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon aria-hidden="true" icon={home} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="services" href="/services">
        <IonIcon aria-hidden="true" icon={list} />
        <IonLabel>Services</IonLabel>
      </IonTabButton>
      <IonTabButton tab="gallery" href="/gallery">
        <IonIcon aria-hidden="true" icon={grid} />
        <IonLabel>Gallery</IonLabel>
      </IonTabButton>
      <IonTabButton tab="quote" href="/quote">
        <IonIcon aria-hidden="true" icon={documentText} />
        <IonLabel>Quote</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
