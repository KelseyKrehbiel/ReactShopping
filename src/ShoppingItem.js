//An individual item within the list that contains a check button and a delete button. There will be 0 or more of these.
//the item will have a line through when checked and has the 2 buttons to check or delete.
import React from 'react'

export default function ShoppingItem(props) {
  return (
    <li>
      <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
      }}>
        {props.item.name}
      </h2>
      <button type='button'>check</button>
      <button type='button'>delete</button>
    </li>
  )
}

ShoppingItem.defaultProps = {
  item: {}
}