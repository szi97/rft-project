export const timetableTemplate = `
<app-newlesson-popup></app-newlesson-popup>
<div>
    <table>
        <thead>
            <th>Óraszám</th>
            <th>Dátum</th>
            <th>Időpont</th>
            <th>Helyszín</th>
            <th>Tantárgy</th>
            <th>Téma</th>
            <th>Megjegyzés</th>
        </thead>
        <tbody>
        <tr *ngFor="let lesson of lessons">
            <td>{{lesson.lessonnumber}}</td>
            <td>{{lesson.date | date: 'y. MM. d'}}</td>
            <td>{{lesson.time | date: 'HH:mm'}}</td>
            <td>{{lesson.location}}</td>
            <td>{{lesson.subject}}</td>
            <td>{{lesson.topic}}</td>
            <td>{{lesson.comment}}</td>
        <tr>
        </tbody>
    </table>
    <button type="button" (click)="newAppointment()">Új óra</button>
</div>
`;
