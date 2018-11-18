export const logintemplate = `
<form class="header-content" id="login">
        <div class="login-form-group"><input type="text" name="loginUsername" [(ngModel)]="model.loginUsername"
        #loginUsername="ngModel" [ngClass]="{ 'is-invalid': f.submitted && loginUsername.invalid }" required />
            <div *ngIf="f.submitted && loginUsername.invalid" class="invalid-feedback">
                <div *ngIf="loginUsername.errors.required">Add meg a felhasználóneved!</div>
            </div>
        </div>
        <div class="login-form-group"><input type="password" name="loginPassword" [(ngModel)]="model.loginPassword"
        #loginPassword="ngModel" [ngClass]="{ 'is-invalid': f.submitted && loginPassword.invalid }" required minlength="8" />
            <div *ngIf="f.submitted && loginPassword.invalid" class="invalid-feedback">
                <div *ngIf="loginPassword.errors.required">Add meg a jelszavad!</div>
            </div>
        </div>
        <div class="login-form-group"><button [disabled]="loading">Bejelentkezés</button></div>
    </form>
`;
