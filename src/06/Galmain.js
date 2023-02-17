import Galcard from "./Galcard";
import { useState , useEffect , useRef} from "react";

const Galmain = ({c1,item}) => {
    //console.log("Galmain item",item);
    //console.log("Galmain c1", c1);

    const [selc1 , setSelc1] = useState() ;
    const [cardItem, setCardItem] = useState();
    const txt1R = useRef();
    const txt2R = useRef();
    let temp;

    useEffect(()=>{txt1R.current.focus();},[])

    useEffect(()=>{
        //console.log("se1c1", selc1)
        setCardItem(item.filter((i)=> i.galTitle === selc1)[0]);
    }, [selc1]); //se1c1원이바뀔때마다 useEffect

    useEffect(()=>{
        setC1tag (
            c1.map((i) =>
            <li className={i === selc1 ? 'ulis' : 'uli' }
            onClick={()=>  selItem(i) }
            key={i} > 
            {i} 
            </li>
            )
        )
    }, []);

    
    const selItem= (i) => {
        setSelc1(i);
    }

    const [c1tag, setC1tag] = useState();

    const showC1 =() => {
        
        
        //console.log(txt1R.current.value);
        temp = c1.filter((i)=> i.includes(txt1R.current.value))
        setSelc1('');
        setC1tag (
            temp.map((i) =>
            <li className={i === selc1 ? 'ulis' : 'uli' }
            onClick={()=>  selItem(i) }
            key={i} > 
            {i} 
            </li>
            )
      
        )
    } 



    return (
       <>
            <div className="content">
                <div className="conleft">
                    <div className='conleftdiv'>
                        <form>
                            <input ref={txt1R} type="text" name="txt1" onChange={showC1}/>
                            <button type="reset">취소</button>
                        </form>
                    </div>
                    <ul>
                        {c1tag}
                    </ul>
                </div>
                <div className="conright">
                    {cardItem && <Galcard cardItem={cardItem}/>}
                </div>
            </div>
       </>
    );
}

export default Galmain;