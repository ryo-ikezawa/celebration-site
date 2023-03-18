import { CSSProperties, useState } from 'react'
// import './slot.css'

const Slot = () => {
  const [count, setCount] = useState(0)
  const [reelState, setreelState] = useState<CSSProperties>();
  // スロットマシーンのリールに表示する画像
  const images = [
    "https://example.com/image1.png",
    "https://example.com/image2.png",
    "https://example.com/image3.png",
    "https://example.com/image4.png",
    "https://example.com/image5.png",
  ];

  const onClick = () => {  
    // スロットマシーンの各リールの状態を表す配列
    let reelStates = [0, 0, 0];
    // スロットマシーンの回転速度
    const speed = 100;
    // スロットマシーンのボタン要素を取得する
    const spinButton = document.getElementById("spin-button");  
    // スロットマシーンの各リール要素を取得する
    const reels = document.querySelectorAll(".reel");
    console.log(document);
    console.log(spinButton);
    console.log(reels);
  
    // スロットマシーンのボタンにクリックイベントを追加する
    // リールの状態をランダムに変更する
    reelStates = reelStates.map(() => Math.floor(Math.random() * images.length));
    console.log(reelStates);
    // リールを回転させるアニメーションを実行する
    reels.forEach((reel, index) => {
      let position = reelStates[index] * -100;
      const style: CSSProperties = {
        transform: `translateY(${position}px)`,
        transition: `transform ${speed}ms ease-in-out`
      }
      setreelState(style);
  
    //     // アニメーションが完了したら、結果をチェックする
        // setTimeout(() => {
        // if (reelStates[0] === reelStates[1] && reelStates[0] === reelStates[2]) {
        //     alert("Congratulations! You won!");
        // } else {
        //     alert("Sorry, try again.");
        // }
        // }, speed * 3);
    });
  }

  return (
        <div>
        <div id="slot-machine">
            <div className="reel" id="reel1" style={reelState}></div>
            <div className="reel" id="reel2" style={reelState}></div>
            <div className="reel" id="reel3" style={reelState}></div>
            <button id="spin-button" onClick={onClick}>Spin</button>
            <button onClick={onClick}>hoge</button>
        </div>
        <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={onClick}>hoge</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

        </div>

  )
}

export default Slot
