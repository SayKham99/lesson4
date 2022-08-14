import React, {useState} from 'react';
import './App.css'

function App() {
  const [products, setProducts] = useState([{id: 1, name: 'Apple', amount: 300}, {id: 2, name: 'Banana', amount: 200}]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  function Add(e) {
    e.preventDefault();
    if (name !== '' && amount !== '') {
      setProducts([...products, {
        id: Date.now(), name: name, amount: amount
      }])
    } else {
      alert('All Inputs is required')
    }
    setAmount('')
    setName('')
  }

  let count = 0
  return (<div className='wrapper'>
    <h1>Functional Component</h1>
    <form>
      <input type="text" placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)}/>
      <input type="number" placeholder='Enter Amount' value={amount} onChange={e => setAmount(e.target.value)}/>
      <button type='submit' onClick={e => Add(e)}>Add</button>
    </form>
    {products.map(prod => (<h2 key={prod.id}>{++count}.{prod.name}:{prod.amount}</h2>))}
  </div>);
}

export default App;