import {Card} from "primereact/card";
import {useState} from "react";


function Conclusion() {
    const [Concs] = useState(` Fast dissolving tablets are innovative dosage forms developed and specially designed to overcome some of the problems that seen in conventional solid dosage form i.e. difficulty in swallowing of the tablet in geriatric and pediatric patients.
     Fast dissolving tablets are designed to dissolve or disintegrate quickly in the saliva generally within less than 60 seconds (range of 5-60 seconds).
     Fast dissolving tablets have better patient compliance and acceptance may improve biopharmaceutical properties, bioavailability improved efficacy, convenience, and better safety compared with conventional oral dosage forms.
     The popularity of FDTs has increased fabulously over the last decade. FDTs formulations formulated by some of these conventional and patent technologies and FDTs have sufficient mechanical strength, quick disintegration/dissolution in the buccal cavity without water. The newer technologies utilized for the formulation of the FDTs that provide more effective dosage forms with more advantages and minimal disadvantages.`.split("\n"));

    return (
        <Card className={'text-left'} title={"Conclusion"}>
            {Concs.map((value,k)=>{
                return <p key={k} className={"font-bold"}><i className='pi pi-check'></i>{value}</p>
            })}
        </Card>
    )
}
export default Conclusion;