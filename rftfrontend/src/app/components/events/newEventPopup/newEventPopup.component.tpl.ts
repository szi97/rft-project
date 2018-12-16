export const newEventPopupTemplate = `
    <ngx-smart-modal #newEventPopup [identifier]="'newEventPopup'">
        <div>
            <label>Név: </label>
            <input [(ngModel)]="event.name">
        </div>
        <div>
            <label>Dátum: </label>
            <input [(ngModel)]="event.date" placeholder="Dátum" [owlDateTimeTrigger]="dt2" [owlDateTime]="dt2">
            <owl-date-time [pickerType]="'calendar'" #dt2></owl-date-time>
        </div>
        <div>
            <label>Idő: </label>
            <input [(ngModel)]="event.time" placeholder="Idő" [owlDateTimeTrigger]="dt1" [owlDateTime]="dt1">
            <owl-date-time [pickerType]="'timer'" #dt1></owl-date-time>
        </div>
        <div>
            <label>Hely: </label>
            <input [(ngModel)]="event.location">
        </div>
        <div>
            <label>Leírás: </label>
            <textarea [(ngModel)]="event.description"></textarea>
        </div>
        <div>
            <label>Szervezők:</label>
            <p>select szervezőknek</p>
        </div>
        <button (click)="saveNewEvent()">Mentés</button>
        <button (click)="newEventPopup.close()">Mégse</button>
    </ngx-smart-modal>
`;
