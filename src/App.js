import './App.css';
import './TodoList';

function App() {
  return (
    <div>
      <TodoList />
      <input type="text" />
      <button>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
