import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


const Project = () => {

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
          "PROJECT",
          "PROJECT COST",
          "PAYMENT",
          "STATUS"
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
        ["Elias Abbasi", "R7 Change", "5$", "Done","Deliveried"],
        ["Hosein Hoseini","HR Manager","2$","Done","Deliveried"],
        ["Elias Abbasi", "Swap", "1$","Pending","Submit"],
        ["Hosein Hoseini", "R7-raise", "1$","Pending","Deliveried"],
        ["Shoale Alirezaei", "MTN", "1$","Done","Submit"],
        ["Name", "MTN", "1$", "Done","Deliveried"],
        ["Name", "MTN", "2$", "Done","Deliveried"],
        ["Name", "MTN", "2$", "Done","Deliveried"],
        ["JName", "Computer Programmer", "2$","Pending","Submit"],
        ["Name", "Business Consultant", "2$","Pending","Submit"],
        ["Name", "Software Developer", "2$","Pending","Submit"],
        ["Name", "Business Manager", "2$","Pending","Submit"]
        ];
  return (
    <div className='pr-container'>
        
        <div className="pr-row">
            <CacheProvider value={muiCache}>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                    title={"PROJECT SUMMARY"}
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

export default Project