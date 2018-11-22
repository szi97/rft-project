export const scheduletemplate = `
<app-mentors-popup></app-mentors-popup>
<app-mentees-popup></app-mentees-popup>
<app-institutions-popup></app-institutions-popup>
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
            <td class=popuptr (click)="showMentor(i)">{{contact.mentor}}</td>
            <td class=popuptr (click)="showMentored(i)">{{contact.mentoralt}}</td>
            <td class=popuptr (click)="showInstitution(i)">{{contact.intezmeny}}</td>
            <td>{{contact.mappa}}</td>
        </tr>
    </tbody>
</table>
</div>
`;