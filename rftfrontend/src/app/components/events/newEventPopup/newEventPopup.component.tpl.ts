export const newEventPopupTemplate = `
    <ngx-smart-modal #newEventPopup [identifier]="'newEventPopup'">
        <div>
            <label>Név: </label>
            <input [(ngModel)]="newEvent.name">
        </div>
        <div>
            <label>Dátum: </label>
            <input [(ngModel)]="newEvent.date" placeholder="Dátum" [owlDateTimeTrigger]="dt2" [owlDateTime]="dt2">
            <owl-date-time [pickerType]="'calendar'" #dt2></owl-date-time>
        </div>
        <div>
            <label>Idő: </label>
            <input [(ngModel)]="newEvent.time" placeholder="Idő" [owlDateTimeTrigger]="dt1" [owlDateTime]="dt1">
            <owl-date-time [pickerType]="'timer'" #dt1></owl-date-time>
        </div>
        <div>
            <label>Hely: </label>
            <input [(ngModel)]="newEvent.location">
        </div>
        <div>
            <label>Leírás: </label>
            <textarea [(ngModel)]="newEvent.description"></textarea>
        </div>
        <div>
            <label>Szervezők:</label>
            <div *ngFor="let leader of allLeaders" class="checkbox">
                <input type="checkbox" value="{{leader.name}}" (change)="updateLeaders(leader, $event)" />
                <label><span></span>{{leader.name}}</label>
            </div>
        </div>
        <button (click)="saveNewEvent()">Mentés</button>
        <button (click)="newEventPopup.close()">Mégse</button>
    </ngx-smart-modal>
`;
