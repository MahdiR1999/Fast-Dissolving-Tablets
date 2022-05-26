import { Chip } from 'primereact/chip';
import {Card} from "primereact/card";

function FreezeDryingOrLyophilization({mobile}){
    return (
        <Card title={`${(mobile === true)?"":"FreezeDryingOrLyophilization"}`} subTitle={`${(mobile === true)?"FreezeDryingOrLyophilization":""}`} className='text-center'>
            <p>Drugs are dissolved or dispersed in aqueous solution of a carrier, transferred to preformed blister packs and subjected to nitrogen flush to freeze out, then placed in the refrigerator to complete the process</p>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Have great mouthfeel due to fast melting effect'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Dissolve rapidly in mouth'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='High drug bioavailability'></Chip>
            <Chip className='text-white bg-red-600 mx-1 mt-1' label='High cost'></Chip>
            <Chip className='text-white bg-red-600 mx-1 mt-1' label='Time-consuming procedure and fragility'></Chip>
            <Chip className='text-white bg-red-600 mx-1 mt-1' label='Stability issues'></Chip>
        </Card>
    )
}
export default FreezeDryingOrLyophilization;