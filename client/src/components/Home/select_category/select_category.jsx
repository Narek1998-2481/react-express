import { memo, useCallback } from "react";

const Select_category =  ({ props }) => {
    return (
        <div className="category_container container " >
            <label className="mb-4" htmlFor="category">Choose a category</label>
            <select
                className="select_control form-control form-control-lg  text-center w-25"
                name="category"
                defaultValue={'All'}
                onChange={
                    useCallback((e) => {
                        props.set_select_value(e.target.value);
                        props.set_nesting((state) => ++state);
                    }, [])}
            >
                <option value={"All"}>All</option>
                {
                    props.elem.map((elem, i) => <option value={elem.value} key={i}>{elem.value}</option>)
                }
            </select>
        </div>
    )
};

export default memo(Select_category,() => true);