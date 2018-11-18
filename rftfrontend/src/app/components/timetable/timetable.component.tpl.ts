export const timetableTemplate = `
<div>
    <table>
        <thead>
            <th>Óraszám</th>
            <th>Dátum</th>
            <th>Időpont</th>
            <th>Helyszín</th>
            <th>Tantárgy</th>
            <th>Téma</th>
            <th>Megjegyzés</th>
        </thead>
        <tbody>
        <tr *ngFor="let lesson of lessons">
            <td>{{lesson.oraszam}}</td>
            <td>{{lesson.datum}}</td>
            <td>{{lesson.idopont}}</td>
            <td>{{lesson.helyszin}}</td>
            <td>{{lesson.tantargy}}</td>
            <td>{{lesson.tema}}</td>
            <td>{{lesson.megjegyzes}}</td>
        <tr>
        </tbody>
    </table>
</div>
`;
