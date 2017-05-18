import React from 'react';

const filteredFruitList = ({fruit, filter}) => {
  const list = !filter ? fruit : fruit.filter(i => i.fruit_type == filter);

  return (
    <ul className="fruit-list">
      {list.map((fruit,index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
}

filteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

export default filteredFruitList;