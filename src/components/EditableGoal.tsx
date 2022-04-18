import { IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonItem, IonLabel } from '@ionic/react'
import { trash, addOutline } from 'ionicons/icons'
import React from 'react'

const EditableGoal: React.FC<{
    text: string;
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    onStartDelete: () => void;
    onStartEdit: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <IonItemSliding ref={props.slidingRef}>
      <IonItemOptions side="start">
        <IonItemOption
          onClick={props.onStartDelete}
          color="danger"
        >
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>

      <IonItem lines="full">
        <IonLabel>{props.text}</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption
          onClick={props.onStartEdit}
        >
          <IonIcon slot="icon-only" icon={addOutline} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

export default EditableGoal