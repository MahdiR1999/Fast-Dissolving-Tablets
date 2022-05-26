
import { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function SalientFeatures() {
    const [text] = useState(`Some drugs are absorbed from the mouth, pharynx and esophagus as the saliva passes down into the stomach. In such cases, the bioavailability of the drug is increased.
    Pre-gastric absorption can result in improved bioavailability and as a result of reduced dosage; Improve clinical performance through a reduction of unwanted effects.
    Good mouth feels property helps to change the perception of medication as a bitter pill particularly in the pediatric patient.
   The risk of choking or suffocation during oral administration of conventional formulation due to physical obstruction is avoided, thus providing improved safety.
    New business opportunity like product differentiation, product promotion, patent extensions and life cycle management.
    Beneficial in cases such as motion sickness, sudden episodes of allergic attack or coughing, where an ultra-rapid onset of action required.
   An increased bioavailability, particularly in cases of insoluble and hydrophobic drugs, due to rapid disintegration and dissolution of these tablets.
    Stability for a longer duration of time, since the drug remains in solid dosage form till it is consumed. So, it combines the advantage of the solid dosage form in terms of stability and liquid dosage form in terms of bioavailability.
    Adaptable and amenable to existing processing and packaging machineries.
    Allow high drug loading
    Cost effective.`.split("\n"));
    return (
        <div>
            <div className="card mx-auto mb-0">
                <DataTable style={{'overflow':'auto','minHeight':250,'maxHeight':400}} size="small" value={text.map((value)=>{
                    return {"Feature":value}
                })} responsiveLayout="scroll">
                    <Column field="Feature" header={"Salient Features"}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default SalientFeatures;