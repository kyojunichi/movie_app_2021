function Food(props) {
  return <h1>I like {props.fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Food fav = "kimchi" />
    </div>
  );
}

export default App;
