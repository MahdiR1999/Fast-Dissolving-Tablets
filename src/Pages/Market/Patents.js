import { Chip } from "primereact/chip";
import {Card} from "primereact/card";
import {useState} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


function Patents(){
    const [patents] = useState(`Megestrol,Spray drying,Quicker dissolve and mask the better Taste of drugs
Phenyl propanolamine,Direct compression,Used of the bioactive agent and in the treatment of dysphagia
Nimesulide,Sodium starch glycolate,Dissolve or disintegrate in the digestive organs
Galanthamine,Direct compression,Used in Alzheimer's disease
Aspirin,Direct compression,Mannose provide rapid dis-integration and dissolution
Ibuprofen,Direct compression,Provide excellent mouth feel
Ibuprofen,Melt extrusion,Very low compression force
Caffeine,Direct compression,Rapid dissolution
Ibuprofen,Direct compression,Low melting point of compound use
Efavirenz,Wet granulation,Used in HIV
Galanthamine HBr, Direct compression, Used in treatment of Alzheimer's demantia`.split("\n"));
    return (
        <DataTable className="text-center mx-auto justify-content-center" header={"Patents"} style={{'overflow':'auto','minHeight':250,'maxHeight':300}} size="small" value={patents.map((value)=>{
            const splitted = value.split(",")
            const Drug = splitted[0]
            const MP = splitted[1]
            const Inference = splitted[2]
            return {Drug,MP,Inference};
            // return {"Drug":value}
        })} responsiveLayout="scroll">
            <Column field="Drug" header={"Drug"}></Column>
            <Column field="MP" header={"Method/Polymer"}></Column>
            <Column field="Inference" header={"Inference"}></Column>
        </DataTable>
    )
}
export default Patents;