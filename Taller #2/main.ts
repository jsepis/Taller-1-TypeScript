import { series } from './data.js';

let seriesTableBody:HTMLElement = document.getElementById("tbody")!;
let prom:number = 0;
let cant:number = 0;
series.forEach(ser => {
    let row = document.createElement('tr');
    row.innerHTML=`<th>${ser.id}</th>
    <td>${ser.name}</td>
    <td>${ser.channel}</td>
    <td>${ser.seasons}</td>`
    seriesTableBody.appendChild(row);
    prom += ser.seasons;
    cant++;
})
let row = document.createElement('tr');
row.innerHTML=`<th>Seasons average: </th>
<td>${prom/cant}</td>`
seriesTableBody.appendChild(row);

    
