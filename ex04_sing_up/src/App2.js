
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmtyPage from "./component/EmptyPage";


// 글자들을 클릭시 
export default function App2() {

    return (
        //스위치의 내부는 공통으로 유지 
        //스위치로 감싸면 일치하는 첫번째 결과를 보여줌
        <BrowserRouter>
            <div className="App2">
                <Header />
                
                <Switch>
                    <Route exact path="/">
                        <DayList />
                    </Route>
                    {/* day 1로들어 왔을 때 */}
                    <Route path="/day/:day">
                        <Day />
                    </Route>
                    {/* 없는 주소를 입력 시 뜨는 창 // 제일 아래있어야한다 */}
                    <Route>
                        <EmtyPage />
                    </Route>

                </Switch>
              
            </div>
        </BrowserRouter>

    );
}