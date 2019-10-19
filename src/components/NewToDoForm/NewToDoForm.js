import React from 'react';

export const NewToDoForm = props => (
   <div>
      <input type="text" onChange={props.onChange} value={props.draft} />
      <button onClick={props.onSubmit}>Add</button>
   </div>
);
