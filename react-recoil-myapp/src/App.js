import './App.css';
import { atom, useRecoilState, useResetRecoilState, selector, useRecoilValue } from "recoil";


const CountAtom = atom({
  key: 'count-atom',
  default : 30

});
const fontSizeSelector = selector ({
  key: 'font-size-selector',
    get: ({ get }) => {
      const count = get(CountAtom)
      const fontSize = count + 0;
      return fontSize;
    }
  });

  function App() {

    const [count, setCount] = useRecoilState(CountAtom);
    const resetCount = useResetRecoilState(CountAtom);
    const fontSize = useRecoilValue(fontSizeSelector);
  

  return (
    <div className="App">
      <h1>React Recoil</h1>
      <h2>The count value is: {count} </h2>
      <h3>The flower size is: {fontSize} px</h3>
      <p style={{fontSize: fontSize}}>🌻</p>
      {/* <img className="image" style={{fontSize: fontSize}} src={IMG1}/> */}
      <br></br>
      <button className="increasecount" onClick={()=> setCount(count + 1)}>Increase count</button>
      <button onClick={resetCount}>Reset count</button>    
      <p>Increase Count button will increase the size of the image</p>
    </div>
    );
}

export default App;
