import data from "../db/data.json"
import Galcard from "./Galcard";
import "./Gal.css";
import { useRef, useState, useEffect } from "react";
const GalSelect = () => {
//데이터 가져오기
    const items  = data.response.body.items.item ;
    
    console.log("items",items);
    const c1 = items.map( (obj) =>obj.galTitle );
    
    
    
    //select box 제어
    const se1R=useRef();

    let optionTag = c1.map((item) => 
        <option key={item} value={item}> {item}</option>
    )

    const [selItem , setselItem] =useState({});

    //컴포넌트가 처음 랜더링이 일어났을때
    useEffect(()=>{
        se1R.current.focus();
        //console.log(se1R.current)
    },[]);

    const handlesel = (e) => {
        e.preventDefault();
        if (se1R.current.value === "") return ;
        
        //console.log("onchange",se1R.current.value)
        let temp = items.filter((item)=> item.galTitle === se1R.current.value);
        //console.log(temp);
        setselItem(temp[0]);

    }
    //
    return (
        <>
        <div className="conright">
            <form className="se1R">
                <select ref = {se1R} className="sel1" onChange={handlesel}>
                    <option value=""> 관광지를 골라주세요. </option>
                    {optionTag}
                </select>
            </form>
            
            {Object.keys(selItem).length > 0  && <Galcard cardItem={selItem}/>}
        </div>
        
           
            
            
        </>
    );
}
export default GalSelect ;