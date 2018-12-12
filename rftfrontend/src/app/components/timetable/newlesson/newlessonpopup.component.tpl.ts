export const newLessonPopupTemplate = `
<ngx-smart-modal #newLessonPopup [identifier]="'newLessonPopup'">
    <form name='lessonForm' (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm">
        <div class="lesson-form-group">
            <label for="lessonnumber">óraszám: </label>
            <input type="number" class="form-control" name="lessonnumber" [(ngModel)]="model.lessonnumber"
            #lessonnumber="ngModel" [ngClass]="{ 'is-invalid': f.submitted && lessonnumber.invalid }" required/>
            <div *ngIf="f.submitted && lessonnumber.invalid" class="invalid-feedback">
                <div *ngIf="lessonnumber.errors.required">Add meg az e-mail címed!</div>
            </div>
        </div>
        <div class="lesson-form-group">
            <label for="date">Dátum: </label>
            <input placeholder="Dátum" [owlDateTimeTrigger]="dt2" [owlDateTime]="dt2" class="form-control" name="date"
            [(ngModel)]="model.date" #date="ngModel" [ngClass]="{ 'is-invalid': f.submitted && date.invalid }" required />
            <owl-date-time [pickerType]="'calendar'" #dt2></owl-date-time>
            <div *ngIf="f.submitted && date.invalid" class="invalid-feedback">
                <div *ngIf="date.errors.required">Add meg az e-mail címed!</div>
            </div>
        </div>
        <div class="lesson-form-group">
            <label for="time">Időpont: </label>
            <input placeholder="Idő" [owlDateTimeTrigger]="dt1" [owlDateTime]="dt1" class="form-control" name="time"
            [(ngModel)]="model.time" #time="ngModel" [ngClass]="{ 'is-invalid': f.submitted && time.invalid }" required/>
            <owl-date-time [pickerType]="'timer'" #dt1></owl-date-time>
            <div *ngIf="f.submitted && time.invalid" class="invalid-feedback">
                <div *ngIf="time.errors.required">Add meg az e-mail címed!</div>
            </div>
        </div>
        <div class="lesson-form-group">
            <label for="location">Helyszín: </label>
            <input type="text" class="form-control" name="location" [(ngModel)]="model.location"
            #location="ngModel" [ngClass]="{ 'is-invalid': f.submitted && location.invalid }" required/>
            <div *ngIf="f.submitted && location.invalid" class="invalid-feedback">
                <div *ngIf="location.errors.required">Add meg az e-mail címed!</div>
            </div>
        </div>
        <div class="lesson-form-group">
            <label for="subject">Tantárgy: </label>
            <input type="text" class="form-control" name="subject" [(ngModel)]="model.subject"
            #subject="ngModel" [ngClass]="{ 'is-invalid': f.submitted && subject.invalid }" required/>
            <div *ngIf="f.submitted && subject.invalid" class="invalid-feedback">
                <div *ngIf="subject.errors.required">Add meg az e-mail címed!</div>
            </div>
        </div>
        <div class="lesson-form-group">
            <label for="topic">Téma: </label>
            <input type="text" class="form-control" name="topic" [(ngModel)]="model.topic"
            #topic="ngModel" [ngClass]="{ 'is-invalid': f.submitted && topic.invalid }" required/>
            <div *ngIf="f.submitted && topic.invalid" class="invalid-feedback">
                <div *ngIf="topic.errors.required">Add meg az e-mail címed!</div>
            </div>
        </div>
        <div class="lesson-form-group">
            <label for="comment">Megjegyzés: </label>
            <textarea maxlength="255" class="form-control" name="comment" [(ngModel)]="model.comment"
            #comment="ngModel" [ngClass]="{ 'is-invalid': f.submitted && comment.invalid }" required></textarea>
            <div *ngIf="f.submitted && comment.invalid" class="invalid-feedback">
                <div *ngIf="comment.errors.required">Add meg az e-mail címed!</div>
            </div>
        </div>
        <div class="lesson-form-group">
            <button [disabled]="loading">Mentés</button>
        </div>
    </form>
    <button type="button" (click)="newLessonPopup.close()">Mégsem</button>
</ngx-smart-modal>
`;
