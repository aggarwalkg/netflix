import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../ListItem/listItem'
import './list.scss'
import {useRef,useState} from "react";
const List = () => {
    const listRef = useRef();
    const [slideNumber, setslideNumber] = useState(0)
    const [isMoved, setisMoved] = useState(false)
    const handleClick =(direction)=>{
        setisMoved(true)
        let distance = listRef.current.getBoundingClientRect().x-50;
        console.log("distnce",distance)
if(direction==="left" && slideNumber>0)
{
    setslideNumber(slideNumber-1)

    listRef.current.style.transform = `translate(${230+distance}px)`

}
if(direction==="right" && slideNumber<5){
    setslideNumber(slideNumber+1)
    listRef.current.style.transform = `translate(${-230+distance}px)`

}

    }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
    <div className="wrapper">
        <ArrowBackIosOutlined  className="arrowSlider left" onClick= {()=>{handleClick("left")}}
        style={{display : !isMoved && "none"}}/>
        <div className="container" ref= {listRef}>
        <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />          
        </div>
        <ArrowForwardIosOutlined  className="arrowSlider right" onClick= {()=>{handleClick("right")}}/>
    </div>
        </div>
    )
}

export default List