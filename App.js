/*eslint-disable*/ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
    let [logo, setLogo] = useState('Reactblog');
    let [따봉, 따봉변경] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [title,Settitle] = useState(0);
    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>

            {/* <div className="list">
                <h4>{글제목[0]}<span onClick={() => {
                따봉변경(따봉 + 1)
            }}>👍</span>
                    {따봉}
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4
                    onClick={() => {
                        setModal(!modal)
                    }}>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[2]}</h4>
                
                <p>2월 17일 발행</p>
            </div> */}

            {
    글제목.map(function (a, i) {
        return (<div className='list'>
            <h4 className='txt' onClick={() => {
                        setModal(!modal); Settitle(i);
                    }}>{글제목[i]}</h4><span onClick={() => {
              let copy = [...따봉];
              copy[i] = copy[i]+1;
              따봉변경(copy)
          }}>👍</span>{따봉[i]}
            <p>2월 17일 발행</p>
        </div>)
    })
}



            <button className='btn'
                    onClick={() => {
                        let copy = [...글제목];
                        copy.sort();
                        글제목변경(copy);
                    }}>가나다순 정렬</button>
             {
                modal == true? <Modal  title = {title} 글제목변경 = {글제목변경} 글제목 = {글제목}/>: null
            }
        </div>
        
    );

}
function Modal(props) {
    return (
        <div className='modal'>
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
              let copy = [...props.글제목[i]];
              copy[0] = "여자 코트 추천";
              props.글제목변경(copy)}}>글수정</button>
        </div> )
  }

export default App;
