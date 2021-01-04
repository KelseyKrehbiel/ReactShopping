import React from 'react';
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

handleDeleteItem = (item) =>{
  console.log('handle delete item called')
  //return everything that does not match the selected item
  const newItems = this.state.shoppingItems.filter(itm => itm !== item)
  this.setState({
    shoppingItems: newItems
  })
}  
handleCheckItem = (item) =>{
  console.log('handle check item called')
  //look for itm that matches item. toggle the check state
  const newItems = this.state.shoppingItems.map(itm => {
    if (itm === item) {
      itm.checked = !itm.checked
    }
    return itm
  })
  this.setState({
    shoppingItems: newItems
  })
}
//use => instead of normal funciton to fix binding 
handleAddItem = (itemName) => {
  console.log('handle add item', { itemName })
  //... is the spread operator
  const newItems = [
  
    ...this.state.shoppingItems,
    { name: itemName, checked: false }
  ]
  this.setState({
    shoppingItems: newItems
  })
}

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} 
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}

export default App;