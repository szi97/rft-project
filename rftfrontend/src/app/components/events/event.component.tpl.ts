export const eventTemplate = `
<div>
    <table *ngFor="let event of events">
        <tr>
            <td id="date">{{event.date | date: 'MM.dd.'}}</td>
            <td class="content">{{event.name}}</td>
        </tr>
        <tr>
            <td id="time">{{event.time}}</td>
            <td class="content">{{event.location}}</td>
        </tr>
    </table>
</div>
`;
