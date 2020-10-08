import React, {useState, useEffect, useContext, useCallback} from 'react';

export default function Checkbox({label, onChange}) {
    

return (
<div className="form-group">
    
    <label>
    <input
    type="checkbox"
    className="checkbox form-control"
    onChange={onChange}
    />
    {label}
    </label>
</div>
);
}
