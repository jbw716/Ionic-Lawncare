import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { documentText, documentTextOutline, grid, gridOutline, home, homeOutline, list, listOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  title: string;
  url: string;
  icon: string;
  selectedIcon: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: homeOutline,
    selectedIcon: home
  },
  {
    title: 'Services',
    url: '/services',
    icon: listOutline,
    selectedIcon: list
  },
  {
    title: 'Gallery',
    url: '/gallery',
    icon: gridOutline,
    selectedIcon: grid
  },
  {
    title: 'Quote',
    url: '/quote',
    icon: documentTextOutline,
    selectedIcon: documentText
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" swipeGesture={true}>
      <IonContent>
        <IonList id="nav-list">
          <IonListHeader>Account</IonListHeader>
          <IonNote>demo@ionic-lawncare.com</IonNote>
          <span id="tab-nav-items">
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon aria-hidden="true" slot="start" icon={location.pathname === appPage.url ? appPage.selectedIcon : appPage.icon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </span>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
