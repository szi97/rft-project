export const mentorsPopupTemplate = `
    <ngx-smart-modal #mentorsPopup [identifier]="'mentorsPopup'">
    <table>
        <tr>
            <td>Név: </td>
            <td>{{mentorsPopup.getData()}}</td>
        </tr>
        <tr>
            <td>E-mail cím: </td>
            <td></td>
        </tr>
        <tr>
            <td>Telefonszám: </td>
            <td></td>
        </tr>
        <tr>
            <td>Facebook adatlap:  </td>
            <td></td>
        </tr>
        <tr>
            <td>Korcsoport: </td>
            <td></td>
        </tr>
        <tr>
            <td>Tantárgy: </td>
            <td></td>
        </tr>
        <tr>
            <td>Intézmény felelős: </td>
            <td></td>
        </tr>
        <tr>
            <td>Megjegyzés: </td>
            <td></td>
        </tr>
    </table>
    <button (click)="mentorsPopup.close()">Close</button>
    </ngx-smart-modal>
    `;