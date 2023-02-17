const Galcard2 = ({cardItem}) => {
    //console.log("cardItem" , cardItem);
    return (
            <div className="concard"> 
                <div> <img src={cardItem.WebImageUrl} /> </div>
                <div>{cardItem.Title}</div>  
                <div className="conkw">{cardItem.Month.substr(0,4)}.
                {cardItem.Month.substr(2,2)}
                </div> 
                <div className="conkw">{cardItem.Photographer}</div>  
                <div className="conkw">{cardItem.SearchKeyword}</div>
            
            </div>
    );
}

export default Galcard2;