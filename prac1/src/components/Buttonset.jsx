function Buttonset(props){
    return (
        <span>
            <input type="button" value="play video" onClick={props.playVid}></input>
            <input type="button" value="pause video" onClick={props.pauseVid}></input>
            <input type="button" value="change video" onClick={props.clickNext}></input>
        </span>
    );
}

export default Buttonset;