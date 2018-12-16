export const eventTemplate = `
<div>
    <table *ngFor="let actevent of events">
        <tr>
            <td id="date" (click)="editEvent(actevent)">{{actevent.date | date: 'MM.dd.'}}</td>
            <td class="content">{{actevent.name}}</td>
        </tr>
        <tr>
            <td id="time" (click)="editEvent(actevent)">{{actevent.time}}</td>
            <td class="content">{{actevent.location}}</td>
        </tr>
    </table>
</div>

<button (click)="createNewEvent()">+ Új esemény</button>
<app-new-event-popup></app-new-event-popup>
<app-edit-event-popup></app-edit-event-popup>
`;
