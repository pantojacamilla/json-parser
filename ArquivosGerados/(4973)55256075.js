html&#xD;&#xA;...&#xD;&#xA;<td class="noWrap">1<td>&#xD;&#xA;<td class="noWrap">2<td>&#xD;&#xA;<td class="customWrap">&#xD;&#xA;  <table>&#xD;&#xA;   <tr>&#xD;&#xA;    <td class="noWrap">3<td>&#xD;&#xA;   </tr>&#xD;&#xA;  </table>&#xD;&#xA;<td>&#xD;&#xA;<td class="noWrap">4<td>&#xD;&#xA;...&#xD;&#xA;I use a selector `$("table td:not(.customWrap)")` to get some node that include 1,2,4.&#xD;&#xA;But with this selector, I filter the node `td.customWrap` successfully and not filter its children `<td class="noWrap">3<td>`. &#xD;&#xA;Actually, I don't want to get the node have `3`.&#xD;&#xA;How do I fix it ? Thanks.