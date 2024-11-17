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
import { archiveOutline, archiveSharp, bookmarkOutline, documentTextOutline, documentTextSharp, gridOutline, gridSharp, heartOutline, heartSharp, homeOutline, homeSharp, listOutline, listSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Services',
    url: '/services',
    iosIcon: listOutline,
    mdIcon: listSharp
  },
  {
    title: 'Gallery',
    url: '/gallery',
    iosIcon: gridOutline,
    mdIcon: gridSharp
  },
  {
    title: 'Quote',
    url: '/quote',
    iosIcon: documentTextOutline,
    mdIcon: documentTextSharp
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
                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
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
