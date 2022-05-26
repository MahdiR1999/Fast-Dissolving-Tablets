import {useState} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";



function CriteriaForExcipients(){
    const [items] = useState(`Their individual properties should not affect the FDTs
 It must be able to disintegrate quickly
 It should not have any interaction with drug and other excipients
 When selecting binder (a single or combination of binders) care must be taken in the final integrity and stability of the product
 The melting point of the excipients used should be in the range of 30-35 °C.
 It should not interfere in the efficacy and organoleptic properties of the product
 The binder may be in liquid, semi-solid, solid or polymeric in nature`.split("\n"));
    return (
        <div>
            <div className="card mx-auto">
                <DataTable size="small" value={items.map((value)=>{
                    return {"CriteriaForExcipients":value}
                })} responsiveLayout="scroll">
                    <Column field="CriteriaForExcipients" header="Criteria For Excipients"></Column>
                </DataTable>
            </div>
        </div>
    )
};
export default CriteriaForExcipients;