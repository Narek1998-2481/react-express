import { memo } from "react";

function StickyInputLabel({props}) {
  // const [inputValue, setInputValue] = useState('');

  return (
    <div className="input-container mt-5">
      <label  htmlFor={props.name} className={props.inputValue ? 'sticky-label' : 'lable_position '}>{props.text}</label>
      <input
        id={props.name}
        type={props.type}
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
    </div>
  );
}

export default memo(StickyInputLabel);