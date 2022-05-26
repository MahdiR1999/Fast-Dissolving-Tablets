import { useState } from "react";

import { Fieldset } from 'primereact/fieldset';
import { Chip } from 'primereact/chip';

function Challenges() {
    const [items] = useState(`Palatability
    Hygroscopicity
    Aqueous solubility
    Sensitivity to environmental conditions
    Mechanical strength and disintegration time
    Amount of drug
    Mouth feel`.split("\n"));
    return(
        <Fieldset className="border-0" legend="Challenges">
            {
                items.map((value,key)=>{
                    return <Chip className="mx-2 my-2" label={value} icon="pi pi-exclamation-circle" />
                })
            }
        </Fieldset>
        
    )
}

export default Challenges;