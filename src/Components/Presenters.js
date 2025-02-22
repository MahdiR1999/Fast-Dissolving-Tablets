import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import {useState} from "react";
function Presenters({mobile}){
    const [items] = useState([
        'Shadmehr Ghorbani - user',
        'Mahdi Raef - code',
        'Mahdi Raeiszadeh - user'
    ]);
    return (
        <>
            <Divider align="center" className='mt-3'>
                <b><i className="font-bold pi pi-users mx-2 text-primary"></i>Presenters</b>
            </Divider>
            <div className={`justify-content-center mx-auto ${(mobile === true)?"text-center":null}`}>
                {
                    items.sort().map((value,key)=>{
                        return <p key={key} className='text-bluegray-800'><i className={`font-bold pi pi-${value.split(" - ")[1]} mx-2 text-primary`}></i>{value.split(" - ")[0]}</p>
                    })
                }
            {/* <Button onClick={()=>{window.close()}} className="mt-0 mx-auto block p-button-rounded p-button-text" icon="pi pi-power-off"></Button> */}
            </div>
        </>
    )
}
export default Presenters;
