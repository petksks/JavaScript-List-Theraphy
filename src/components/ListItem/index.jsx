const ListItem = ({task, removeItem}) => {
    const handleClick = itemId => {
      removeItem(itemId);
    }
  
      return (
          <div data-testid="task-item">
              <p>{task.description}</p>
              <button onClick={() => handleClick(task.id)}>Remove</button>
          </div>
      )
  }
  
  export default ListItem;