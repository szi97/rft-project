export const logintemplate = `
<div id="container">
    <form name="login-form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm">
        <div class="login-form-group">
            <label for="email">E-mail cím:</label>
            <input type="text" name="email" [(ngModel)]="model.email"
            #email="ngModel" [ngClass]="{ 'is-invalid': f.submitted && email.invalid }" required email/>
            <div *ngIf="f.submitted && email.invalid" class="invalid-feedback">
                <div *ngIf="email.errors.required">Add meg a felhasználóneved!</div>
                <div *ngIf="email.errors.email">Nem megfelelő formátum</div>
            </div>
        </div>
        <div class="login-form-group">
            <label for="password">Jelszó:</label>
            <input  type="password" name="password" [(ngModel)]="model.password"
            #password="ngModel" [ngClass]="{ 'is-invalid': f.submitted && password.invalid }" required minlength="8"/>
            <div *ngIf="f.submitted && password.invalid" class="invalid-feedback">
                <div *ngIf="password.errors.required">Add meg a jelszavad!</div>
                <div *ngIf="password.errors.minlength">A jelszónak legalább 8 karakter hosszúnak kell lennie</div>
            </div>
        </div>
        <div class="login-form-group">
            <button [disabled]="loading">Bejelentkezés</button>
        </div>
    </form>
</div>
`;
