import React from 'react';

let Category = ( props ) => {
  let { category } = props.match.params
    return (
      <div>
        { category }
      </div>
    )
}

export default Category;
