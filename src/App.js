import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // submit 했을때 새로고침 안되도록 막아줌.
    if (toDo === "") {
      return;
    }
    // toDo가 비어있다면 그냥 함수 반환.
    setToDos((current) => [toDo, ...current]);
    // 배열을 꼭 해주어야한다. 아니면 그냥 문자열로 나온다.
    // ... 스프레드 연산자를 이용하여야 배열안에서 합쳐줄 수 있다.

    setTodo("");
    // submit 한다음 value값 비워지도록
  };

  return (
    <div>
      <h1>내가 할일 {toDos.length}개</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your To do... "
        />
        <button type="submit">Add To Do</button>
      </form>
    </div>
  );
}

export default App;
