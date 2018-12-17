export const timetableTemplate = `
<app-newlesson-popup></app-newlesson-popup>
<div>
    <div>
        Szűrés:
        <select id=filtering-select [(ngModel)]="actualMentor">
            <option>Mentor</option>
            <option *ngFor="let mentor of allmentors">{{mentor}}</option>
        </select>
    </div>
    <table>
        <thead>
            <th>Mentor</th>
            <th>Mentorált</th>
            <th>Óraszám</th>
            <th>Dátum</th>
            <th>Időpont</th>
            <th>Helyszín</th>
            <th>Tantárgy</th>
            <th>Téma</th>
            <th>Megjegyzés</th>
        </thead>
        <tbody>
        <tr *ngFor="let lesson of getCorrectMentors(); let i=index">
            <td><input [(ngModel)]="lesson.mentorName" [disabled]="i !== editableRow"></td>
            <td><p id=mentee *ngIf="i !== editableRow">{{lesson.menteeName}}</p>
                <select [(ngModel)]="lesson.menteeName" (change)="SetNewContactMentee($event.target.selectedIndex)"
                    *ngIf="i === editableRow">
                <option *ngFor="let mentee of allMentees">{{mentee.name}}</option>
                </select>
            </td>
            <td><input [(ngModel)]="lesson.lessonnumber" [disabled]="i !== editableRow"></td>
            <td><input [(ngModel)]="lesson.date" [disabled]="i !== editableRow"></td>
            <td><input [(ngModel)]="lesson.time" [disabled]="i !== editableRow"></td>
            <td><input [(ngModel)]="lesson.location" [disabled]="i !== editableRow"></td>
            <td><input [(ngModel)]="lesson.subject" [disabled]="i !== editableRow"></td>
            <td><input [(ngModel)]="lesson.topic" [disabled]="i !== editableRow"></td>
            <td><input [(ngModel)]="lesson.comment" [disabled]="i !== editableRow"></td>
            <p *ngIf="i !== editableRow" (click)="editRow(lesson, i)">Szerkesztés</p>
            <p *ngIf="i === editableRow" (click)="saveModification(lesson)">Mentés</p>
            <p *ngIf="i === editableRow" (click)="cancelModification(i)">Mégse</p>
        <tr>
        </tbody>
    </table>
    <button type="button" (click)="newAppointment()">+ Új óra</button>
</div>
`;
