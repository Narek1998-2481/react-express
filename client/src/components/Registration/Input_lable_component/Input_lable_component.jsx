import { memo } from "react";

export default memo(function Input_lable_component({ props }) {
    return (
        <div className="input_lable_component">
            <div>
                <label htmlFor={props.name}>{props.text}</label>
            </div>
            <input
                onChange={e => props.setValue(e.target.value)}
                placeholder={props.text}
                value={props.value}
                className='input_lable_component_input form-control'
                type={props.type} name={props.name} />
        </div>
    );
})