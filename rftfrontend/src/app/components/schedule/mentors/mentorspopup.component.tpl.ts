export const mentorsPopupTemplate = `
    <ngx-smart-modal #mentorsPopup [identifier]="'mentorsPopup'">
    <p>Te {{mentorsPopup.getData()}}-t nyitottad meg :D</p>
    <button (click)="mentorsPopup.close()">Close</button>
    </ngx-smart-modal>
    `;
