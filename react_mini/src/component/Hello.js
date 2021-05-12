
/* component 파일 만드는법 */
//1번
/* const Hello =>{
    <p>Hello</p>
}



export default Hello;
 */



import World from "./World";
import "./css/Hello.css";

export default function Hello(){
    return (
    <div>
        <h1
            style={{
                color: "#f00",
                borderRight: "12 pz solid #000",
                marginBottom: "50px",
                opacity: 1,
            }}
        >
        Hello
        </h1>
        <div className="box"></div>
    </div>
    
    );
}