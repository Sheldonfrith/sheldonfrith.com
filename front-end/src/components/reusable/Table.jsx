import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Table({header,columns,rows}) {
    if (columns && rows){
        return <div>Cannot define BOTH columns based and rows based lists</div>;
    }
    if (!(columns || rows)){
        // console.log(header,columns, rows);
        return <div>No input list detected for this component...</div>;
    }
    if (!(Array.isArray(columns) || Array.isArray(rows))){
        // console.log(header,columns, rows);
        return <div>Input lists are not valid arrays...</div>
    }
//table can be either defined by columns or rows, not both
//the input props are simply a list of lists of of jsx elements, which will be inserted in order
//HEADER is always defined rows-based, left to right, always at the top

//remove null values from the active list
if (columns){
    columns = columns.filter(item=>item!==null);
}
if (rows){
    rows = rows.filter(item=>item!==null);
}


//rendering with row-based list is much easier, so convert columns based list to rows list here:
if (columns && !rows){
    // const newRows = [];
    // //get max rows
    // let longestCol = 0;
    // columns.forEach(column=>{if(column.length>longestCol)longestCol=column.length});
    // for (let i=0;i<longestCol;i++){
    //     newRows.push([]);
    // }
    // newRows.forEach(rowArray=>{

    // })

    //>> this short method taken from StackOverflow, im not sure how it would handle columns of different lengths
    // console.log(columns);
    if (!Array.isArray(columns[0])) throw new Error('error in Table component, columns[0] is not an array'+columns[0]);
    rows = columns[0].map((_, rowIndex) => columns.map(col => col[rowIndex]));
}
const numberOfColumns = columns?columns.length:rows[0].length;

//column based table
if (columns){
    return (
        <table className="table">
                {header?(
                    <thead>
                        <tr className="d-flex">
                        {header.map((item,index)=><th key={`tableHeader${index}`} className={'col-'+(12/numberOfColumns).toString()}>{item}</th>)}
                        </tr>
                    </thead>
                )
            :<thead></thead>}
            <tbody>
                {rows.map((rowItems,index1)=>{
                    return (
                        <tr key={`tablerow${index1}`} className="d-flex">
                            {rowItems.map((item,index)=>{
                                return <th key={`tablecell${index}`} className={'col-'+(12/numberOfColumns).toString()}>{item}</th>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        );
}

//row based table
if (rows){
    return (
        <div>
        
        </div>
        );
}

}
