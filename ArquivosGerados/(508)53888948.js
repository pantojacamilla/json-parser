    <ReactTable&#xD;&#xA;      data={data}&#xD;&#xA;      columns={columns}&#xD;&#xA;      getTdProps={(cellInfo) => {&#xD;&#xA;          return {&#xD;&#xA;            if (cellInfo.value > 1) {&#xD;&#xA;                cellInfo.className = "green-cell";&#xD;&#xA;            }&#xD;&#xA;            if (cellInfo.value < 1) {&#xD;&#xA;                cellInfo.className = "red-cell";&#xD;&#xA;            }&#xD;&#xA;          };&#xD;&#xA;        }}&#xD;&#xA;    />