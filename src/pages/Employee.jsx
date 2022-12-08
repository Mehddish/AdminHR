import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


const Employee = () => {
  const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
});
  
const [responsive, setResponsive] = useState("vertical");
const [tableBodyHeight, setTableBodyHeight] = useState("400px");
const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
const [searchBtn, setSearchBtn] = useState(true);
const [downloadBtn, setDownloadBtn] = useState(true);
const [printBtn, setPrintBtn] = useState(true);
const [viewColumnBtn, setViewColumnBtn] = useState(true);
const [filterBtn, setFilterBtn] = useState(true);

const columns = [
      { name: "Position NAME", options: { filterOptions: { fullWidth: true } } },
      "Position Leader",
      "Total Employee"  
];
  
const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
    console.log(action);
    console.dir(state);
 }
};
  
const data = [
  ["Shift Manager", "Elias1", "4"],
  ["FO","Elias2","100"],
  ["HD", "Elias3", "50"],
  ["Technical Support", "Elias4", "10"],
  ["HR", "Elias5", "4"]
    ];

  return (
    <div className='u-container'>
      <div className="u-row">
        <button className='u-btn'>ADD NEW</button>
      </div>
      <div className='u-row'>
        <div className="u-badge">
          <span>Total Employee</span>
          <h1>200</h1>
        </div>
      </div>
      <div className='u-row'>
        <CacheProvider value={muiCache}>
                  <ThemeProvider theme={createTheme()}>
                      <MUIDataTable
                      title={"EMPLOYEE LIST"}
                      data={data}
                      columns={columns}
                      options={options}
                      />
                  </ThemeProvider>
        </CacheProvider>
      </div>
    </div>
  )
}

export default Employee