

import { useState } from "react";

export default function UseState() {


    // 4. 버튼 클릭시 변경 하기 

    // useState 배열로 받기 //3

    const [name, setName] = useState('Mike');

    return (
        <div>
            <h1>state</h1>
            <h2>컴포넌트의 속성값</h2>
            <h2 id="name">{name}</h2>
            <button onClick={() => {
                setName(name === "Mike" ? "jane" : "Mike");
            }
            }>Change</button>
        </div>

    );



    //     // 3. 버튼 클릭시 변경 하기 

    // // useState 배열로 받기 //2

    // const [name,setName] = useState('Mike');



    // function changeName(){
    //     setName(name === "Mike" ? "jane" : "Mike");
    // }

    // return (
    //     <div>
    //         <h1>state</h1>
    //         <h2>컴포넌트의 속성값</h2>
    //         <h2 id ="name">{name}</h2>
    //         <button onClick={changeName}>Change</button>
    //            </div>

    // );



    // // 2.버튼 클릭시 변경 하기  

    // // useState 배열로 받기 //1 

    // const [name,setName] = useState('Mike');



    // function changeName(){
    //     const newName = name === "Mike" ? "jane" : "Mike";
    //     setName(newName);
    // }

    // return (
    //     <div>
    //         <h1>state</h1>
    //         <h2>컴포넌트의 속성값</h2>
    //         <h2 id ="name">{name}</h2>
    //         <button onClick={changeName}>Change</button>
    //            </div>

    // );


    // let name ="Mike"

    // function changeName(){
    //     name = name === "Mike" ? "jane" : "Mike";
    //     console.log(name);
    //     document.getElementById("name").innerText = name;
    // }

    // return (
    //     <div>
    //         <h1>state</h1>
    //         <h2>컴포넌트의 속성값</h2>
    //         <h2 id ="name">{name}</h2>
    //         <button onClick={changeName}>Change</button>
    //            </div>

    // );
}