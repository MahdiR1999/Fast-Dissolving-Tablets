import { Chip } from "primereact/chip";
import {Card} from "primereact/card";


function Molding({mobile}){
    return (
        <Card className='text-center' title={`${(mobile === true)?"":"Molding"}`} subTitle={`${(mobile === true)?"Molding":""}`}>
            <p>Powder mass is wetted with hydroalcoholic solvent and compressed into a dosage form. The solvent system is then allowed to evaporate</p>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Rapid dissolution (very porous as solvents are removed by drying leaving porous mass)'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Taste of drug particles is developed by spray congealing the molten mixture of hydrogenated cottonseed oil, sodium carbonate, lecithin, polyethene glycol with an active ingredient into lactose based tablet triturate.'></Chip>
        </Card>
    )
}
export default Molding;