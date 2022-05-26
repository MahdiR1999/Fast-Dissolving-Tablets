import { Image } from "primereact/image";
import { useEffect, useState } from "react";

function Model({mobile}){
    const [image,setImage] = useState("History");
    useEffect(()=>{
        const Timer = setInterval(() => {
            if(image === "model"){
                setImage("History")
            }else if(image === "History"){
                setImage("model");
            }
        }, 10000);
        return () => clearInterval(Timer);
    });
    return (
        <>
            {
                (mobile!==true)
                ?<div className="p-0 mb-0" style={{'overflow':'auto','maxHeight':500}}>
                    <h4 className="text mt-0 mb-0 p-0">Model</h4>
                    <Image className="mt-0 p-0" width="490" height="450" src={require(`./Images/${image}.png`)}></Image>
                </div>
                :<div className="p-0 mb-0" style={{'overflow':'auto','maxHeight':500}}>
                <h4 className="text mt-0 mb-0 p-0">Model</h4>
                <Image className="mt-0 p-0" width="100%" height="100%" src={require(`./Images/${image}.png`)}></Image>
                </div>
            }
        </>
    )
}
export default Model;