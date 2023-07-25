import React, { useMemo, useRef } from 'react';

export default props => {

    const data = useMemo( ()=> props.api.getDisplayedRowAtIndex(props.rowIndex).data, []);
    const inputEl = useRef(null);


    const onFormSubmit = (e) => {
        e.preventDefault();
        const { node, column } = props;
        const target = inputEl.current;

        if (target.value && node) {
            node.setDataValue(column, target.value);
            if (props.hideTooltipCallback) {
                props.hideTooltipCallback();
            }
        }
    }

    return (
        <div className={'panel panel-' + (props.type || 'primary')}>
            <div className="panel-heading">
                <h3 className="panel-title">{data.country}</h3>
            </div>
            <form className="panel-body" onSubmit={onFormSubmit}>
                <div className="form-group">
                    <input type="text" ref={inputEl} className="form-control" id="name" placeholder="Name" defaultValue={data.athlete} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <p>Total: {data.total}</p>
            </form>
        </div>
    );
};
