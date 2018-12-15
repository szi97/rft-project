export const menteesPopupTemplate = `
    <ngx-smart-modal #menteesPopup [identifier]="'menteesPopup'">
    <table>
        <tr>
            <td>Név: </td>
            <td>{{menteesPopup.getData().name}}</td>
        </tr>
        <tr>
            <td>Születési dátum: </td>
            <td>{{menteesPopup.getData().birth}}</td>
        </tr>
        <tr>
            <td>Osztály: </td>
            <td>{{menteesPopup.getData().schoolclass}}</td>
        </tr>
        <tr>
            <td>Tantárgy:  </td>
            <td>{{menteesPopup.getData().subject}}</td>
        </tr>
        <tr>
            <td>Intézmény: </td>
            <td>{{menteesPopup.getData().institutionid}}</td>
        </tr>
        <tr>
            <td>Megjegyzés: </td>
            <td>comment</td>
        </tr>
    </table>
    <button (click)="menteesPopup.close()">Close</button>
    </ngx-smart-modal>
    `;
