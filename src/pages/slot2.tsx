import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import './slot2.css'

const RandomNumber = () => {
    const number = Math.floor(Math.random() * 10)
    return <span>{number}</span>
}

const Reel = () => {
    const [count, setCount] = useState(0);
    const [numberArray, setNumberArray] = useState([0,1,2,3,4,5,6,7,8,9,0]);
    const [child, setChild] = useState<ReactNode>(<RandomNumber/>);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1);
            // setNumberArray([...numberArray, Math.floor(Math.random() * 10)])
            console.log(numberArray);
        }, 1000);
        return () => clearInterval(id);
    }, [count])

    return(
        <div className="fix-number">
            {numberArray.map((child, index) => (
                <span key={String(index)}>{child}</span>
            ))
            }
            {/* <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>0</span><span>1</span><span>2</span>{child} */}
        </div>
    )
}

const Slot2 = () => {
  const [count, setCount] = useState(0)
  const [reelState, setreelState] = useState<CSSProperties>();

  useEffect(() => {
    // 今日の年月日を取得
    const today = new Date();
    const yearNum = today.getFullYear();
    const monthNum = today.getMonth() + 1;
    const dateNum = today.getDate();
  
    //分割するため一旦文字列に変換
    const yearSt = String(yearNum); //西暦
    const monthSt = String(('0' + monthNum).slice(-2)); //月の前に0を付け足し後ろから2文字を取得
    const dateSt = String(('0' + dateNum).slice(-2)); //日の前に0を付け足し後ろから2文字を取得
  
    // 取得した年月日を1文字ずつに分割し数値に変換
    const yearNum3 = Number((yearSt).slice(2, 3)); //西暦の3桁目
    const yearNum4 = Number((yearSt).slice(3, 4)); //西暦の4桁目
    const monthNum1 = Number((monthSt).slice(0, 1)); //月の1桁目
    const monthNum2 = Number((monthSt).slice(1, 2)); //月の2桁目
    const dateNum1 = Number((dateSt).slice(0, 1)); //日の1桁目
    const dateNum2 = Number((dateSt).slice(1, 2)); //日の2桁目
  
    // 数字を代入する要素を全て取得
    const changeNum = document.querySelectorAll('.change-number');
  
    //0～9の数字をスロットの各リールに追加
    // const beforeNum = ;
    // changeNum.forEach(function (el) {
    //   el.appendChild(beforeNum);
    // });
  
    // 今日の日付を分割した数字のオブジェクトを用意（上記の数字の後に追加するもの）
    // const obj = {
    //   1: yearNum3,
    //   2: yearNum4,
    //   3: monthNum1,
    //   4: monthNum2,
    //   5: dateNum1,
    //   6: dateNum2,
    // }
    const obj = [
        yearNum3,
        yearNum4,
        monthNum1,
        monthNum2,
        dateNum1,
        dateNum2,
    ]
    
    // スロットの各リールに今日の日付の数字が最後になるまで数字を追加していく
    // obj.forEach((el, index) => {
    //     for(let i = 0; i < el; i++) {
    //         document.getElementById(`#change-number- + ${index}`)?.append(<span>${i}</span>);
    //     }
    // })

  }, [])
  

  return (
    <div className="counter">

    <div className="year">
      <div className="fix-number">
        <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>0</span><span>1</span><span>2</span>
      </div>
      <div className="fix-number">
        <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>0</span>
      </div>
      <Reel></Reel>
      {/* <Reel></Reel>
      <Reel></Reel> */}
      <div id="change-number-1" className="change-number">1</div>
      <div id="change-number-2" className="change-number">2</div>
    </div>

    <div className="month">
      <div id="change-number-3" className="change-number">3</div>
      <div id="change-number-4" className="change-number">4</div>
    </div>

    <div className="date">
      <div id="change-number-5" className="change-number">5</div>
      <div id="change-number-6" className="change-number">6</div>
    </div>

  </div>  )
}

export default Slot2
