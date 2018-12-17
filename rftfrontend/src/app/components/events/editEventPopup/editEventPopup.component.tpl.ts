export const editEventPopupTemplate = `
    <ngx-smart-modal #editEventPopup [identifier]="'editEventPopup'" [autostart]="false">
        <div>
            <label>Név: </label>
            <input [(ngModel)]="editEventPopup.getData().name">
        </div>
        <div>
            <label>Dátum: </label>
            <input [(ngModel)]="editEventPopup.getData().date" placeholder="Dátum" [owlDateTimeTrigger]="dt2" [owlDateTime]="dt2">
            <owl-date-time [pickerType]="'calendar'" #dt2></owl-date-time>
        </div>
        <div>
            <label>Idő: </label>
            <input [(ngModel)]="editEventPopup.getData().time" placeholder="Idő" [owlDateTimeTrigger]="dt1" [owlDateTime]="dt1">
            <owl-date-time [pickerType]="'timer'" #dt1></owl-date-time>
        </div>
        <div>
            <label>Hely: </label>
            <input [(ngModel)]="editEventPopup.getData().location">
        </div>
        <div>
            <label>Leírás: </label>
            <textarea [(ngModel)]="editEventPopup.getData().description"></textarea>
        </div>
        <div>
            <label>Szervezők:</label>
            <p><input [(ngModel)]="editEventPopup.getData().organizers"></p>
        </div>
        <button (click)="saveEvent()">Mentés</button>
        <button (click)="editEventPopup.close()">Mégse</button>
    </ngx-smart-modal>
`;
