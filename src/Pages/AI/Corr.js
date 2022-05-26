import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";


function Corr(){
    const [data] = useState(`Corr Between D Time And API_mg Is 0.013143502557091022
    Corr Between D Time And Mannitol_mg Is -0.06350822426194837
    Corr Between D Time And MCC_mg Is -0.1252000506770118
    Corr Between D Time And Lactose_mg Is -0.06524955101916241
    Corr Between D Time And Calcium_silicate_mg Is 0.003113170660944552
    Corr Between D Time And HPMC_mg Is 0.7025715856931032
    Corr Between D Time And Sodium_bicarbonate_mg Is -0.07487250362108787
    Corr Between D Time And SSG_mg Is 0.0030596551625914374
    Corr Between D Time And CC_Na_mg Is 0.035533197019019296
    Corr Between D Time And Crospovidone_mg Is -0.06963109504219198
    Corr Between D Time And L_HPC_mg Is -0.05680745307688872
    Corr Between D Time And Pregelatinized_starch_mg Is 0.11243321244998886
    Corr Between D Time And Sodium_carboxymethyl_starch_mg Is -0.04398904944589455
    Corr Between D Time And Mg_stearate_mg Is 0.1625292530935627
    Corr Between D Time And Aerosil_mg Is -0.08296134645577909
    Corr Between D Time And Sodium_stearyl_fumarate_mg Is -0.06937535955403674
    Corr Between D Time And Colloidal_silicon_dioxide_mg Is 0.20929241615926836
    Corr Between D Time And Talc_mg Is 0.010985695412754324
    Corr Between D Time And X2HP_bCD_mg Is -0.031098581532286076
    Corr Between D Time And CD_methacrylate_mg Is -0.08103889737408594
    Corr Between D Time And Amberlite_IRP_64_69_mg Is -0.03612630090995556
    Corr Between D Time And Eudragit_EPO_mg Is -0.026214035983431104
    Corr Between D Time And Poloxamer_188_mg Is -0.03678802208108127
    Corr Between D Time And PVP_mg Is -0.05748405052017418
    Corr Between D Time And SLS_mg Is 0.1074931914729124
    Corr Between D Time And PVA_mg Is -0.03486092197385671
    Corr Between D Time And Camphor_mg Is -0.06962561542949823
    Corr Between D Time And Hardness_N Is 0.0297450712207017
    Corr Between D Time And Thickness_mm Is 0.3012901945572613
    Corr Between D Time And Punch_mm Is 0.19239703349363577`.replace(/_/g," ").replace(/Corr Between D Time And /g,"").split("\n"));
    const [table,setTable] = useState();
    useEffect(()=>{
        let temp = [];
        data.map((item)=>{
            const temp_item = item.split(" Is ");
            temp.push({
                title:temp_item[0],
                Correlation:temp_item[1]
            });
        });
        temp = temp.sort((a,b) => a.Correlation - b.Correlation).reverse();
        setTable(temp);
    },[]);
    return(
        <div className="card mx-auto mb-0">
                <DataTable header={"Correlation"} style={{'overflow':'auto','minHeight':250,'maxHeight':300}} size="small" value={table} responsiveLayout="scroll">
                    <Column field="title" header={"Feature"}></Column>
                    <Column field="Correlation" header={"Correlation With D Time"}></Column>
                </DataTable>
            </div>
    )
}
export default Corr;