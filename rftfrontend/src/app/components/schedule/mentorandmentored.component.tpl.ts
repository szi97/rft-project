export const mentorandmentoredtemplate = `
<app-mentors-popup></app-mentors-popup>
<div>
<table>
    <thead>
        <th>Mentor</th>
        <th>Mentorált</th>
        <th>Intézmény</th>
        <th>Mappa link</th>
    </thead>
    <tbody>
        <tr *ngFor="let contact of contacts; let i=index">
            <td class=popuptr (click)="onClick(i)">{{contact.mentor}}</td>
            <td class=popuptr>{{contact.mentoralt}}</td>
            <td class=popuptr>{{contact.intezmeny}}</td>
            <td>{{contact.mappa}}</td>
        </tr>
    </tbody>
</table>
</div>
`;
