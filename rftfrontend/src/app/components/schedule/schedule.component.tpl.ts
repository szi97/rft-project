export const scheduletemplate = `
<app-mentors-popup></app-mentors-popup>
<app-mentees-popup></app-mentees-popup>
<app-institutions-popup></app-institutions-popup>
<div>
    <div class=filtering-select>
        Szűrés:
        <select [(ngModel)]="actualInstitution">
            <option>Intézmény</option>
            <option *ngFor="let institution of allInstitutions">{{institution.name}}</option>
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
            <td class=popuptr (click)="i !== editableRow && showMentor(contact.mentorId)">
                <input [(ngModel)]="contact.mentorName" value={{contact.mentorName}} [disabled]="i !== editableRow">
            </td>
            <td class=popuptr (click)="i !== editableRow && showMentee(contact.menteeId)">
                <input [(ngModel)]="contact.menteeName" value={{contact.menteeName}} [disabled]="i !== editableRow">
            </td>
            <td class=popuptr (click)="i !== editableRow && showInstitution(contact.institutionId)">
                <input [(ngModel)]="contact.institutionName" value={{contact.institutionName}} [disabled]="i !== editableRow">
            </td>
            <td>
                <a *ngIf="i !== editableRow" href={{contact.folderLink}}}>Mentormappa Link</a>
                <input [(ngModel)]="contact.folderLink" value={{contact.folderLink}} *ngIf="i === editableRow"></td>
            <img src="../assets/edit.jpg" *ngIf="i !== editableRow" (click)="editRow(contact, i)">
            <img src="../assets/checkmark.png" *ngIf="i === editableRow" (click)="saveModification(contact)">
            <img src="../assets/cancel.png" *ngIf="i === editableRow" (click)="cancelModification(i)">
        </tr>
        <tr *ngIf="createNewContact == true">
            <td><select (change)="SetNewContactMentor($event.target.selectedIndex)">
                <option *ngFor="let mentor of allMentors">{{mentor.name}}</option>
                </select>
            </td>
            <td><select (change)="SetNewContactMentee($event.target.selectedIndex)">
                <option *ngFor="let mentee of allMentees">{{mentee.name}}</option>
                </select>
            </td>
            <td><select (change)="SetNewContactInstitution($event.target.selectedIndex)">
                <option *ngFor="let institution of allInstitutions">{{institution.name}}</option>
                </select>
            </td>
            <td><input [(ngModel)]="newContact.folderLink"></td>
            <img src="../assets/checkmark.png" (click)="addContact()">
        </tr>
    </tbody>
</table>
<button *ngIf="createNewContact == false" (click)="setDefaultNewContact()">+ Új sor</button>
</div>
`;
