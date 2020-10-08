import { Grid } from '@material-ui/core';
import React, {useState, useEffect, useContext, useCallback} from 'react';
import styled from 'styled-components';



export default function GridContainer({children, rows, columns}) {
    const GridDiv = styled.div`
    display: grid;
    grid-template-columns: [first] 1fr repeat(${columns?columns-2:28}, 1fr) [last] 1fr;
    grid-template-rows: [first] 1fr repeat(${rows?rows-2:58}, 1fr) [last] 1fr;
`

return (
<div>
    {children}
</div>
);
}
