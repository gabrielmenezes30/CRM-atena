import { IonPage, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonIcon, menuController, IonThumbnail, IonCard, IonCardHeader, IonCardContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { addIcons } from 'ionicons';
import { arrowBack, arrowDown, layers, paperPlaneSharp, peopleSharp, newspaperSharp, walletSharp, arrowForwardCircle } from 'ionicons/icons';
import { useRouter } from 'vue-router';

addIcons({
  'arrow-back': arrowBack,
  'arrow-down': arrowDown,
  'layers': layers,
  'paper-plane-sharp': paperPlaneSharp,
  'people-sharp': peopleSharp,
  'newspaper-sharp': newspaperSharp,
  'wallet-sharp': walletSharp,
  'arrow-forward-circle': arrowForwardCircle
});

export default defineComponent({
    name: 'Alvos',
    components: {
      IonPage,
      IonContent,
      IonButtons,
      IonMenuButton,
      IonList,
      IonThumbnail, 
      IonCard, 
      IonCardHeader, 
      IonCardContent, 
      IonButton,
      IonIcon,
      IonItem
    },
    methods: {
      openFirst() {
        menuController.enable(true, 'first');
        menuController.open('first');
      },
      openEnd() {
        menuController.open('end');
      },
      openCustom() {
        menuController.enable(true, 'custom');
        menuController.open('custom');
      },
      // Botão toggle, que está inserido no Toolbar do Dashbord
      toggle() {
        this.IsOpen = !this.IsOpen;
      }
    },
    data: () => {
      return {
        IsOpen: false,
      }
    },
    setup() {
      const router = useRouter();
      return { router };
    }
  });