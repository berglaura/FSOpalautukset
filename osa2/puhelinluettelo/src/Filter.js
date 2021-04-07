import React from 'react'

export const Filter = ({ condition, handleCondition }) => {
    return (
        <div>
            filter shown with: <input
                value={condition}
                onChange={handleCondition}/>
        </div>
    )
}
