import { IonPage, IonContent, IonButtons, IonMenuButton, IonList, IonItem, menuController, IonThumbnail, IonCard, IonCardHeader, IonCardContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Dashbord',
  components: {
    IonContent,
    IonPage,
    IonButtons,
    IonMenuButton,
    IonList,
    IonThumbnail, 
    IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonButton,
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
  }
});
