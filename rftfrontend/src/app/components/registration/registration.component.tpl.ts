export const registrationTemplate = `
<form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm">
    <div class="form-group">
        <label for="email">E-mail cím: </label>
        <input type="text" class="form-control" name="email" [(ngModel)]="model.email"
        #email="ngModel" [ngClass]="{ 'is-invalid': f.submitted && email.invalid }" required email/>
        <div *ngIf="f.submitted && email.invalid" class="invalid-feedback">
            <div *ngIf="email.errors.required">Add meg az e-mail címed!</div>
            <div *ngIf="email.errors.email">Érvénytelen e-mail cím.</div>
        </div>
    </div>
    <div class="form-group">
        <label for="password">Jelszó: </label>
        <input type="password" class="form-control" name="password" [(ngModel)]="model.password"
            #password="ngModel" [ngClass]="{ 'is-invalid': f.submitted && password.invalid }" required minlength="8"/>
        <div *ngIf="f.submitted && password.invalid" class="invalid-feedback">
            <div *ngIf="password.errors.required">Add meg a jelszavad"!</div>
            <div *ngIf="password.errors.minlength">A jelszónak legalább 8 karakter hosszúnak kell lennie</div>
        </div>
    </div>
    <div class="form-group">
        <label for="name">Név: </label>
        <input type="text" class="form-control" name="name" [(ngModel)]="model.name"
            #name="ngModel" [ngClass]="{ 'is-invalid': f.submitted && name.invalid }" required />
        <div *ngIf="f.submitted && name.invalid" class="invalid-feedback">
            <div *ngIf="name.errors.required">Add meg a neved!</div>
        </div>
    </div>
    <div class="form-group">
        <label for="phoneNumber">Telefonszám:</label>
        <input type="text" class="form-control" name="phoneNumber" [(ngModel)]="model.phoneNumber"
        #phoneNumber="ngModel" [ngClass]="{ 'is-invalid': f.submitted && phoneNumber.invalid }" required />
        <div *ngIf="f.submitted && phoneNumber.invalid" class="invalid-feedback">
            <div *ngIf="phoneNumber.errors.required">Add meg a telefonszámod!</div>
        </div>
    </div>
    <div class="form-group">
        <label for="facebook">Facebook adatlap: </label>
        <input type="text" class="form-control" name="facebook" [(ngModel)]="model.facebook"
        #facebook="ngModel" [ngClass]="{ 'is-invalid': f.submitted && facebook.invalid }" required />
        <div *ngIf="f.submitted && facebook.invalid" class="invalid-feedback">
            <div *ngIf="facebook.errors.required">Add meg a facebook adatlapod linkjét!</div>
        </div>
    </div>
    <div class="form-group">
        <label for="agegroups">Korcsoport: </label>
        <div *ngFor="let agegroup of agegroups">
        <input type="checkbox" name="agegroups" value="{{agegroup}}" (change)="updateCheckedAgegroups(agegroup, $event)" />
            <label><span></span>{{agegroup}}</label>
        </div>
    </div>
    <div class="form-group">
        <label for="subjects">Tantárgy: </label>
        <div *ngFor="let subject of subjects">
        <input type="checkbox" name="subjects" value="{{subject}}" (change)="updateCheckedSubjects(subject, $event)" />
            <label><span></span>{{subject}}</label>
        </div>
    </div>
    <div class="form-group">
        <button [disabled]="loading">Regisztráció</button>
    </div>
</form>
`;
