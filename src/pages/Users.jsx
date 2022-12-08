import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const Users = () => {

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
      { name: "NAME", options: { filterOptions: { fullWidth: true } } },
      "CREATED DATE",
      "POSITION",
      "EXPERIENCE",
      "ROLE TYPE"  
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
    ["Elias Abbasi", "March 2022", "NOC Manager", "Expert", "Boss"],
    ["Mehdi Shaabani","March 2022","HR Manager","Fresh","Super Admin"],
    ["Ali Hoseini", "July 2023", "FO","Fresh"],
    ["Hosein Alipanah", null, "Shift Manager","Expert"],
    ["Nima Hashemi", null, "HD","Expert"]
    ];

  return (
    <div className='u-container'>
      <div className="u-row">
        <button className='u-btn'>ADD NEW</button>
      </div>
      <div className='u-row'>
        <CacheProvider value={muiCache}>
                  <ThemeProvider theme={createTheme()}>
                      <MUIDataTable
                      title={"USER LIST"}
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

export default Users