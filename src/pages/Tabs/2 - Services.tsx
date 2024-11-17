import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './2 - Services.css';

const Services: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Services page" />
      </IonContent>
    </IonPage>
  );
};

export default Services;
