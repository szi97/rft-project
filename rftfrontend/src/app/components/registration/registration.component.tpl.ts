export const registrationTemplate = `
<form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm">
    <div class="form-group">
        <label for="userName">Felhasználónév: </label>
        <input type="text" class="form-control" name="userName" [(ngModel)]="model.userName"
            #userName="ngModel" [ngClass]="{ 'is-invalid': f.submitted && userName.invalid }" required pattern="[a-zA-Z1-9]*"/>
        <div *ngIf="f.submitted && userName.invalid" class="invalid-feedback">
            <div *ngIf="userName.errors.required">Add meg a felhasználóneved!</div>
        </div>
    </div>
    <div class="form-group">
        <label for="jelszo">Jelszó: </label>
        <input type="text" class="form-control" name="jelszo" [(ngModel)]="model.jelszo"
            #jelszo="ngModel" [ngClass]="{ 'is-invalid': f.submitted && jelszo.invalid }" required minlength="8"/>
        <div *ngIf="f.submitted && jelszo.invalid" class="invalid-feedback">
            <div *ngIf="jelszo.errors.required">Add meg a jelszavad!</div>
            <div *ngIf="jelszo.errors.minlength">A jelszónak legalább 8 karakter hosszúnak kell lennie</div>
        </div>
    </div>
    <div class="form-group">
        <label for="fullName">Név: </label>
        <input type="text" class="form-control" name="fullName" [(ngModel)]="model.fullName"
            #fullName="ngModel" [ngClass]="{ 'is-invalid': f.submitted && fullName.invalid }" required />
        <div *ngIf="f.submitted && fullName.invalid" class="invalid-feedback">
            <div *ngIf="fullName.errors.required">Add meg a neved!</div>
        </div>
    </div>
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
        <label for="telefonszam">Telefonszám:
        <input type="text" class="form-control" name="telefonszam" [(ngModel)]="model.telefonszam"
        #telefonszam="ngModel" [ngClass]="{ 'is-invalid': f.submitted && telefonszam.invalid }" required /> </label>
        <div *ngIf="f.submitted && telefonszam.invalid" class="invalid-feedback">
            <div *ngIf="telefonszam.errors.required">Add meg a telefonszámod!</div>
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
        <label for="tantargy">Tantárgy: </label>
        <input type="text" class="form-control" name="tantargy" [(ngModel)]="model.tantargy"
        #tantargy="ngModel" [ngClass]="{ 'is-invalid': f.submitted && tantargy.invalid }" required />
        <div *ngIf="f.submitted && tantargy.invalid" class="invalid-feedback">
            <div *ngIf="tantargy.errors.required">Add meg a tantárgyat!</div>
        </div>
    </div>
    <div class="form-group">
        <button [disabled]="loading">Regisztráció</button>
    </div>
</form>
`;
