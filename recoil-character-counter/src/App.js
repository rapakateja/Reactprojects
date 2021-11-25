import './App.css';
import { atom, useRecoilState, useResetRecoilState, selector, useRecoilValue } from "recoil";
import IMG1 from './images/img.png';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'Teja Rapaka', // default value (aka initial value)
});


const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCounter() {
  return (
    <div className="App">
      <h1>Character counter using React-recoil</h1>
      <br></br>
      <img alt="react logo" src={IMG1}/>
      <TextInput />
      <CharacterCount/>
      <br></br>
      <div>
        <p>Help taken from</p>
      <a href="https://recoiljs.org/docs/introduction/getting-started/#recoilroot" 
      target="_blank">React Recoil Doc</a>
      </div>
    </div>
  );
}


function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };
  
return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <p>Character : {text}</p>
    </div>
  );
}


function CharacterCount() {
  const count = useRecoilValue(charCountState);
  

  return <>
    <div>
    Character Count: {count}
    <br></br>
      <p>Character Count also counts the space from the text</p>
    </div>
  </>;

  }

export default CharacterCounter;
