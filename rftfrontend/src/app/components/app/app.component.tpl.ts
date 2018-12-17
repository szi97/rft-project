export const apptemplate = `
<div class="header">
    <img src="../assets/lathatatlan_logokek.png">
</div>
<nav class="topnavigation" id="mynav">
      <div>
          <ul class="navbarlist">
              <li><a routerLink="" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Kezdőoldal</a></li>
              <li><a routerLink="menetrend" routerLinkActive="active-link">Menetrend</a></li>
              <li><a routerLink="regisztracio" routerLinkActive="active-link">Regisztráció</a></li>
              <li><a routerLink="esemenyek" routerLinkActive="active-link">Események</a></li>
              <li><a routerLink="orarend" routerLinkActive="active-link">Órarend</a></li>
              <li><a routerLink="logout" routerLinkActive="active-link">Kijelentkezés</a></li>
          </ul>
      </div>
  </nav>
  <div id="container">
    <router-outlet></router-outlet>
  </div>
  <footer>
    <div class="footerdiv">
        <p>Elérhetőségek:</p>
        <p>Láthatatlan Iskola</p>
        <p>Honlap: www.lathatatlaniskola.hu</p>
        <p>Email: info@lathatatlaniskola.hu</p>
        <p>FB: www.facebook.com/lathatatlaniskola</p>
        <p>Insta: www.instagram.com/lathatatlaniskola</p>
        <p>Telefonszám: +36123456789</p>
    </div>
  </footer>
  `;
