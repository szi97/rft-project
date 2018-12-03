export const registrationTemplate = `
<form name="form" (ngSubmit)="f.form.valid && onSubmit(f.form.value)" #f="ngForm">
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
            <div *ngIf="password.errors.required">Add meg a jelszavad!</div>
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
        <label for="phone">Telefonszám:
        <input type="text" class="form-control" name="phone" [(ngModel)]="model.phone"
        #phoneNumber="ngModel" [ngClass]="{ 'is-invalid': f.submitted && phone.invalid }" required /> </label>
        <div *ngIf="f.submitted && phone.invalid" class="invalid-feedback">
            <div *ngIf="phone.errors.required">Add meg a telefonszámod!</div>
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
        <label for="agegroup">Korcsoportok: </label>
        <input type="text" class="form-control" name="agegroup" [(ngModel)]="model.agegroup"
        #subjects="ngModel" [ngClass]="{ 'is-invalid': f.submitted && subject.invalid }" required />
        <div *ngIf="f.submitted && agegroup.invalid" class="invalid-feedback">
            <div *ngIf="agegroup.errors.required">Add meg a korcsoportot!</div>
        </div> //ListBox!!!
    </div>
    <div class="form-group">
        <label for="subject">Tantárgyak: </label>
        <input type="text" class="form-control" name="subject" [(ngModel)]="model.subject"
        #subjects="ngModel" [ngClass]="{ 'is-invalid': f.submitted && subject.invalid }" required />
        <div *ngIf="f.submitted && subject.invalid" class="invalid-feedback">
            <div *ngIf="subject.errors.required">Add meg a tantárgyat!</div>
        </div> //ListBox!!!
    </div>
    <div class="form-group">
        <button [disabled]="loading">Regisztráció</button>
    </div>
</form>
`;
