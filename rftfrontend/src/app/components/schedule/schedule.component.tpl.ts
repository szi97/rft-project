export const scheduletemplate = `
<app-mentors-popup></app-mentors-popup>
<app-mentees-popup></app-mentees-popup>
<app-institutions-popup></app-institutions-popup>
<div>
    <div>
        Szűrés:
        <select [(ngModel)]="actualInstitution">
            <option>Intézmény</option>
            <option *ngFor="let institution of institutions">{{institution}}</option>
        </select>
    </div>
<table>
    <thead>
        <th>Mentor</th>
        <th>Mentorált</th>
        <th>Intézmény</th>
        <th>Mappa link</th>
    </thead>
    <tbody>
        <tr *ngFor="let contact of getCorrectContacts()">
            <td class=popuptr (click)="showMentor(contact.mentorId)">{{contact.mentorName}}</td>
            <td class=popuptr (click)="showMentored(contact.menteeId)">{{contact.menteeName}}</td>
            <td class=popuptr (click)="showInstitution(contact.institutionId)">{{contact.institutionName}}</td>
            <td>{{contact.folderLink}}</td>
            <p> edit</p>
        </tr>
        <tr *ngIf="createNewContact == true">
            <td><input class=popuptr [(ngModel)]="newContact.mentorName"></td>
            <td><input class=popuptr [(ngModel)]="newContact.menteeName"></td>
            <td><input class=popuptr [(ngModel)]="newContact.institutionName"></td>
            <td><input [(ngModel)]="newContact.folder"></td>
            <p (click)="addContact()">Mentés</p>
        </tr>
    </tbody>
</table>
<button *ngIf="createNewContact == false" (click)="createNewContact=!createNewContact">+ Új whatever</button>
</div>
`;
