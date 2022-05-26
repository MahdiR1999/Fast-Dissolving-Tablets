import {useState} from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {InputSwitch} from "primereact/inputswitch";

function Brands() {
    const [ir_brands] = useState(`Carbaglu,Carglumic Acid
Meltiva,Rizatriptan
Lorament,Loratadine
Oditron,Ondansetron
Loratadine,Loratadine
Rizatan,Rizatriptan
Ondansetron,Ondansetron
Behsetron,Ondansetron
Rizatriptan,Rizatriptan
Benzylagine,Benzydamine HCL
Fluoride Behsa,Fluoride Sodium
Mignot,Rizatriptan
Rizamelt,Rizatriptan
Benzydamine Behvazan,Benzydamine
Carglumic Acid Waymade,Carglumic Acid
Vita Flash,Vitamin C + Zinc`.split("\n").map((value)=>{
        const temp = value.split(",");
        const Brand = temp[0];
        const Drug = temp[1];
        return {Brand,Drug}
    }));
    const [in_brands] = useState(`Benadryl Fastmelt,Diphenhydramine
Claritin redi Tab*,Loratadine
Domperidon Ebb,Domperidon
Domperon,Domperidon
Feldene Fast Melt,Piroxicam
Febrectol,Paracetamol
Gaster D,Famotidine
Imodium Instant Melts*,Loperamide HCL
Maxalt MLT*,Rizatriptan
Nausea OD,Ramosetoron HCL
Klonopin Wafers,Clonazepam
Pepcid RPD,Famotidine
Tempra Quicklets,Acetaminophen
Zelapar TM,Selegiline
Zyprexa*,Olanzapine
Zomig-ZMT*,Zolmitriptan
Zofran ODT*,Ondansetron`.split("\n").map((value)=>{
    const temp = value.split(",");
    const Brand = temp[0];
    const Drug = temp[1];
    return {Brand,Drug}
    }));
    const [status,setStatus] = useState('in');
    return (
        <>
            <div>IR <InputSwitch trueValue={"in"} falseValue={"ir"} checked={status} onChange={(e)=>{
                setStatus(e.value);
            }} className={'mx-auto mt-0'}></InputSwitch> IN</div>
            <DataTable header={(status === 'in')?"IN Brands":"IR Brands"} value={(status === 'in')?in_brands:ir_brands} style={{'overflow':'auto','minHeight':250,'maxHeight':400}} size="small">
                <Column header={"Brand Name"} field={"Brand"}></Column>
                <Column header={"Active Drug"} field={"Drug"}></Column>
            </DataTable>
        </>
    )
}
export default Brands;