
import { useState } from "react";
import UserName from "./UserName";


export default function Props({age}) {

    //2)Props : properties 
    // 클릭시 다른 현재 component의 객체를 다른 component에서 사용 
    //가능 한다 {name} 
    //
    //console.log(props);
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인 입니다 " : "미성년자 입니다";

    return (
        <div>
            {/* props 사용법 */}
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name = {name} />

            <button 
            onClick={() => {
                setName(name === "Mike" ? "jane" : "Mike");
            }
            }>Change</button>
        </div>

    );


    // //1)Props : properties 
    // // 클릭시 나이 올라가는거 
    // //
    // //console.log(props);
    // const [name, setName] = useState('Mike');
    // const [age, setAge] = useState(props.age);

    // return (
    //     <div>
    //         {/* props 사용법 */}
    //         <h2 id="name">
    //             {name}({age}세)</h2>

    //         <button onClick={() => {
    //             setName(name === "Mike" ? "jane" : "Mike");
    //             setAge(age + 1);
    //         }
    //         }>Change</button>
    //     </div>

    // );
}