export const logintemplate = `
<div id="container">
    <form name="login-form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm">
        <div class="login-form-group">
            <input type="text" name="loginUsername" [(ngModel)]="model.loginUsername"
            #loginUsername="ngModel" [ngClass]="{ 'is-invalid': f.submitted && loginUsername.invalid }" required />
            <div *ngIf="f.submitted && loginUsername.invalid" class="invalid-feedback">
                <div *ngIf="loginUsername.errors.required">Add meg a felhasználóneved!</div>
            </div>
        </div>
        <div class="login-form-group">
            <input type="password" name="loginPassword" [(ngModel)]="model.loginPassword"
            #loginPassword="ngModel" [ngClass]="{ 'is-invalid': f.submitted && loginPassword.invalid }" required/>
            <div *ngIf="f.submitted && loginPassword.invalid" class="invalid-feedback">
                <div *ngIf="loginPassword.errors.required">Add meg a jelszavad!</div>
            </div>
        </div>
        <div class="login-form-group">
            <button [disabled]="loading">Bejelentkezés</button>
        </div>
    </form>
</div>
`;
