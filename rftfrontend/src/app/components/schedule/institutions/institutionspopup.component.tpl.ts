export const institutionsPopupTemplate = `
    <ngx-smart-modal #institutionsPopup [identifier]="'institutionsPopup'">
    <table>
        <tr>
            <td>Név: </td>
            <td>{{institutionsPopup.getData().name}}</td>
        </tr>
        <tr>
            <td>E-mail cím: </td>
            <td>{{institutionsPopup.getData().email}}</td>
        </tr>
        <tr>
            <td>Telefonszám: </td>
            <td>{{institutionsPopup.getData().phone}}</td>
        </tr>
        <tr>
            <td>Cím: </td>
            <td>{{institutionsPopup.getData().address}}</td>
        </tr>
        <tr>
            <td>Vezető: </td>
            <td>{{institutionsPopup.getData().director}}</td>
        </tr>
        <tr>
            <td>Intézmény felelős: </td>
            <td>{{institutionsPopup.getData().responsible}}</td>
        </tr>
    </table>
    <button (click)="institutionsPopup.close()">Close</button>
    </ngx-smart-modal>
    `;
