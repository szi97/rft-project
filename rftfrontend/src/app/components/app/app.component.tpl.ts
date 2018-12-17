export const apptemplate = `
<div class="header">
    <img src="../assets/lathatatlan_logokek.png">
</div>
<nav class="topnavigation" id="mynav">
      <div>
          <ul class="navbarlist">
              <li><a routerLink="" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Kezdőoldal</a></li>
              <li *ngIf="actualUser[0] === true">
                <a routerLink="menetrend" routerLinkActive="active-link">Menetrend</a>
              </li>
              <li><a routerLink="esemenyek" routerLinkActive="active-link">Események</a></li>
              <li><a routerLink="orarend" routerLinkActive="active-link">Órarend</a></li>
              <li *ngIf="actualUser[0] === true"><a routerLink="regisztracio" routerLinkActive="active-link">Regisztráció</a></li>
          </ul>
      </div>
  </nav>
  <div id="container">
    <router-outlet></router-outlet>
  </div>
  <footer>
    <div class="footerdiv">
        <p>Láthatatlan Iskola</p>
        <p>Telefonszám: +36123456789</p>
        <p>Email: info@lathatatlaniskola.hu</p>
    </div>
    <div class="footerlogo">

    <a href="http://www.lathatatlaniskola.hu"><img src="../assets/weblogo.png"></a>
    <a href="http://www.facebook.com/lathatatlaniskola"><img src="../assets/facebook.png"></a>
    <a href="http://www.instagram.com/lathatatlaniskola"><img src="../assets/insta.png"></a>


        <!--<img href="http://www.lathatatlaniskola.hu" src="../assets/weblogo.png">
        <img href="http://www.facebook.com/lathatatlaniskola" src="../assets/facebook.png">
        <img href="http://www.instagram.com/lathatatlaniskola" src="../assets/insta.png">-->
    </div>
  </footer>
  `;
