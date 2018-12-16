export const eventTemplate = `
<div>
    <table *ngFor="let event of events">
        <tr>
            <td id="date" (click)="editEvent(event)">{{event.date | date: 'MM.dd.'}}</td>
            <td class="content">{{event.name}}</td>
        </tr>
        <tr>
            <td id="time" (click)="editEvent(event)">{{event.time}}</td>
            <td class="content">{{event.location}}</td>
        </tr>
    </table>
</div>

<button (click)="createNewEvent()">+ Új esemény</button>
<app-new-event-popup></app-new-event-popup>
<app-edit-event-popup></app-edit-event-popup>
`;
