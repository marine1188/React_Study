import dummy from "../db/data.json";
import {useParams} from "react-router-dom";
//Route 값을 이용할때 

export default function Day(){
        //날자 수 받아주 변수  
    //const day = 1;
    const { day } = useParams();
    //필터를 통해 날짜가 1인 거만 출력 
    const wordList = dummy.words.filter(word =>(word.day === Number(day)))
    

    // console.log(a);
    
    // console.log(wordList);

    return (
    <>
    <h2>Day{day}</h2>
    <table>
        {wordList.map(word =>(
            <tr key ={word.id}>
                <td>{word.eng}</td>
                <td>{word.kor}</td>
            </tr>
        ))}
    </table>
    </>
    );
}