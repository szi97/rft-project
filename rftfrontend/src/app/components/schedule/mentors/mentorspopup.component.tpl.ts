export const mentorsPopupTemplate = `
    <ngx-smart-modal #mentorsPopup [identifier]="'mentorsPopup'">
    <table>
        <tr>
            <td>Név: </td>
            <td>{{mentorsPopup.getData().name}}</td>
        </tr>
        <tr>
            <td>E-mail cím: </td>
            <td>{{mentorsPopup.getData().email}}</td>
        </tr>
        <tr>
            <td>Telefonszám: </td>
            <td>{{mentorsPopup.getData().phone}}</td>
        </tr>
        <tr>
            <td>Facebook adatlap:  </td>
            <td>{{mentorsPopup.getData().facebook}}</td>
        </tr>
        <tr>
            <td>Korcsoport: </td>
            <td>{{mentorsPopup.getData().agegroup}}</td>
        </tr>
        <tr>
            <td>Tantárgy: </td>
            <td>{{mentorsPopup.getData().subject}}</td>
        </tr>
        <tr>
            <td>Intézmény felelős: </td>
            <td>{{mentorsPopup.getData().responsible}}</td>
        </tr>
        <tr>
            <td>Megjegyzés: </td>
            <td>{{mentorsPopup.getData().comment}}</td>
        </tr>
    </table>
    <button (click)="mentorsPopup.close()">Close</button>
    </ngx-smart-modal>
    `;
