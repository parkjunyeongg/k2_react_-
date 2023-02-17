const Galcard = ({cardItem}) => {
    //console.log("cardItem" , cardItem);
    return (
            <div className="concard"> 
                <div> <img src={cardItem.galWebImageUrl} /> </div>
                <div>{cardItem.galTitle}</div>  
                <div className="conkw">{cardItem.galPhotographyMonth.substr(0,4)}.
                {cardItem.galPhotographyMonth.substr(2,2)}
                </div> 
                <div className="conkw">{cardItem.galPhotographer}</div>  
                <div className="conkw">{cardItem.galSearchKeyword}</div>
            
            </div>
    );
}

export default Galcard;