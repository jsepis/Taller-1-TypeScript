import { series } from './data.js';
var seriesTableBody = document.getElementById("tbody");
var prom = 0;
var cant = 0;
series.forEach(function (ser) {
    var row = document.createElement('tr');
    row.innerHTML = "<th>".concat(ser.id, "</th>\n    <td>").concat(ser.name, "</td>\n    <td>").concat(ser.channel, "</td>\n    <td>").concat(ser.seasons, "</td>");
    seriesTableBody.appendChild(row);
    prom += ser.seasons;
    cant++;
});
var row = document.createElement('tr');
row.innerHTML = "<th>Seasons average: </th>\n<td>".concat(prom / cant, "</td>");
seriesTableBody.appendChild(row);
