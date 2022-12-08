import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


const Accounts = () => {
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
      { name: "CLIENT NAME", options: { filterOptions: { fullWidth: true } } },
      "CREATED DATE",
      "EXPIRED DATE",
      "ACTIVE",
      "USERNAME",
      "PASSWORD"
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
    ["MAE1-ELIAS", "March 2022", "November 2023", "Yes", "Elias1234@huawei.com","32322626"],
    ["MAE2-MEHDI","November 2022","AUG 2024","No", "Elias1234@huawei.com","32322626"],
    ["MAE3-SHOALE", "June 2023", "July 2023","No", "Elias1234@huawei.com","32322626"],
    ["ENM1-REZA", "March 2022", "AUG 2024","Yes", "Elias1234@huawei.com","32322626"],
    ["NETACT-ELIAS","December 2022", "January 2023","Yes", "Elias1234@huawei.com","32322626"]
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

export default Accounts