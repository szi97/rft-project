export const institutionsPopupTemplate = `
    <ngx-smart-modal #institutionsPopup [identifier]="'institutionsPopup'">
    <table>
        <tr>
            <td>Név: </td>
            <td>{{institutionsPopup.getData()}}</td>
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
            <td>Cím: </td>
            <td></td>
        </tr>
        <tr>
            <td>Vezető: </td>
            <td></td>
        </tr>
        <tr>
            <td>Intézmény felelős: </td>
            <td></td>
        </tr>
    </table>
    <button (click)="institutionsPopup.close()">Close</button>
    </ngx-smart-modal>
    `;
