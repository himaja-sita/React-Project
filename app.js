import Expenses from './component/Expenses';

function App() {
  const expenses=[
    { id:'e1',
      title: 'Shopping',
      amount: 2000,
      date: new Date(2023,4,16)
    },
    { id:'e2',
      title: 'LIC Insurance',
      amount: 5000,
      date: new Date(2023,4,1)
    },
    { id:'e3',
      title: 'food',
      amount: 2000,
      date: new Date(2023,4,7)
    },
    { id:'e4',
      title: 'Travel',
      amount: 3000,
      date: new Date(2023,4,6)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses {...expenses}></Expenses>
    </div>
  );
}

export default App;
