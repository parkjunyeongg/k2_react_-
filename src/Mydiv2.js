import './App.css';

const Mydiv2 =() => {
    const myName="박준영";
    const myGit="https://github.com/parkjunyeongg";
    //console.log(myName)
    return (
      <div>
        <p>{myName}</p>
        <p>Github : <a href={myGit}>{myGit}</a></p>
      </div>
    );


}

export default Mydiv2;
