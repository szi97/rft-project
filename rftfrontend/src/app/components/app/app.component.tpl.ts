export const apptemplate = `
<div class="header">
    <img src="../assets/lathatatlan_logokek.png">
    <app-login></app-login>
</div>
<nav class="topnavigation" id="mynav">
      <div>
          <ul class="navbarlist">
              <li><a routerLink="" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Kezdőoldal</a></li>
              <li><a routerLink="menetrend" routerLinkActive="active-link">Menetrend</a></li>
              <li><a routerLink="regisztracio" routerLinkActive="active-link">Regisztráció</a></li>
              <li><a>Események</a></li>
              <li><a routerLink="orarend" routerLinkActive="active-link">Órarend</a></li>
          </ul>
      </div>
  </nav>
  <div id="container">
    <router-outlet></router-outlet>
  </div>
  <footer>
    <div class="footerdiv">
        <p>Elérhetőségek:
        </p>
    </div>
  </footer>
  `;
