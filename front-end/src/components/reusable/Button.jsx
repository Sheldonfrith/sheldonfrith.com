
import React, {useState, useEffect, useContext, useCallback} from 'react';

export default function Button({label, onClick, className,children}) {

return (
<button className={'btn '+className} onClick={onClick}>
{label || children}
</button>
);
}
