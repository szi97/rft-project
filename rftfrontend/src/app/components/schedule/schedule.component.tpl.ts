export const scheduletemplate = `
<app-mentors-popup></app-mentors-popup>
<app-mentees-popup></app-mentees-popup>
<app-institutions-popup></app-institutions-popup>
<div>
    <div>
        Szűrés:
        <select [(ngModel)]="actualInstitution">
            <option>Intézmény</option>
            <option *ngFor="let institution of allInstitutions">{{institution.institutionName}}</option>
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
        <tr *ngFor="let contact of getCorrectContacts(); let i = index">
            <td class=popuptr (click)="showMentor(contact.mentorId)">{{contact.mentorName}}</td>
            <td class=popuptr (click)="showMentored(contact.menteeId)">{{contact.menteeName}}</td>
            <td class=popuptr (click)="showInstitution(contact.institutionId)">{{contact.institutionName}}</td>
            <td>{{contact.folderLink}}</td>
            <p (click)="editableRow = i"> Edit</p>
        </tr>
        <tr *ngIf="createNewContact == true">
            <td><select (change)="SetNewContactMentor($event.target.selectedIndex)">
                <option *ngFor="let mentor of allMentors">{{mentor.mentorName}}</option>
                </select>
            </td>
            <td><select (change)="SetNewContactMentee($event.target.selectedIndex)">
                <option *ngFor="let mentee of allMentees">{{mentee.menteeName}}</option>
                </select>
            </td>
            <td><select (change)="SetNewContactInstitution($event.target.selectedIndex)">
                <option *ngFor="let institution of allInstitutions">{{institution.institutionName}}</option>
                </select>
            </td>
            <td><input [(ngModel)]="newContact.folder"></td>
            <p (click)="addContact()">Mentés</p>
        </tr>
    </tbody>
</table>
<button *ngIf="createNewContact == false" (click)="setDefaultNewContact()">+ Új whatever</button>
</div>
`;
