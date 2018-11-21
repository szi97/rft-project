export const menteesPopupTemplate = `
    <ngx-smart-modal #menteesPopup [identifier]="'menteesPopup'">
    <table>
        <tr>
            <td>Név: </td>
            <td>{{menteesPopup.getData()}}</td>
        </tr>
        <tr>
            <td>Születési dátum: </td>
            <td></td>
        </tr>
        <tr>
            <td>Osztály: </td>
            <td></td>
        </tr>
        <tr>
            <td>Tantárgy:  </td>
            <td></td>
        </tr>
        <tr>
            <td>Intézmény: </td>
            <td></td>
        </tr>
        <tr>
            <td>Megjegyzés: </td>
            <td></td>
        </tr>
    </table>
    <button (click)="menteesPopup.close()">Close</button>
    </ngx-smart-modal>
    `;
