
import { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Advantages() {
    const [text] = useState(`No need of water to swallow the tablet
    FDTs can be easily administered to pediatric, elderly and mentally disabled patients.
    Accurate dosing as compared to liquids
    Dissolution and absorption of the drug is fast, offering rapid onset of action
    Bioavailability increased: 1- absorption from mouth, pharynx and esophagus 2- First pass metabolism is reduced
    Advantageous over liquid medication in terms of administration as well as transportation
    Offering improved safety
    Suitable for sustained/controlled release actives
    Allows high drug loading`.split("\n"));
    return (
        <div>
            <div className="card mx-auto">
                <DataTable size="small" value={text.map((value)=>{
                    return {"Advantage":value}
                })} responsiveLayout="scroll">
                    <Column field="Advantage" header="Advantages"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default Advantages;