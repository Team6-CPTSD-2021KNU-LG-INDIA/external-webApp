import { useEffect, useRef, useState } from "react";
import Buttonset from "./Buttonset.jsx";

function Mediabox(){
    const [index, setIndex] = useState(0);
    const vidRef = useRef(null);
    let videoType = ["video/mp4","video/mp4"];
    let urlList=[
        "/저자는 몰라도 엮은이는 기억하는 길 인턴.mp4",
        "/산악회 아저씨들이 부르는 Justin Bieber - Peaches🍑.mp4",
    ];

    function playVid(){
        vidRef.current.play();
    }
    function pauseVid(){
        vidRef.current.pause();
    }
    function clickNext(){
        if (index+1 === urlList.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
        vidRef.current.load();
    }
    useEffect(()=>{},[index]);

    const defstyle={
        "display":"flex",
        "flexDirection": "column",
    }
    return (
        <div style={defstyle}>
            <Buttonset playVid={playVid} pauseVid={pauseVid} clickNext={clickNext}/>

            <video ref={vidRef} width={640} height={480}>
                <source src={urlList[index]} type={videoType[index]}/>
            </video>
        </div>
    );
}

export default Mediabox;
