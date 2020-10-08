import React, {useState, useEffect, useContext, useCallback} from 'react';

export default function TextInput({placeholder, onChange, label}) {

return (
<div className="form-group">
    {label?<label>{label}</label>:<></>}
    <input
    className="form-control"
    placeholder={placeholder}
    onChange={onChange}
    />

</div>
);
}
