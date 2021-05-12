export default function Hello() {

    function showName() {
        console.log("Mike");
    }
    // function showText(e){
    //     console.log(e.target.value)   
    // }
        function showText(txt){
        console.log(txt);   
    }
    return (
        <div>
            <h1></h1>

            <button onClick={showName}>show name</button>
            <button onClick={() => {
                console.log(30);
            }}
            >show age
            </button>
            <br />
            {/* 입력하는데로 입력 */}
            {/* <input type="text" onChange={showText}/> */}

            {/* <input type="text" onChange={(e)=>{
                console.log(e.target.value)
            }}/> */}

            <input 
                type="text"
                onChange={e => {
                    const txt = e.target.value;
                    showText(txt);
                }}
            />
               </div>

    );
}