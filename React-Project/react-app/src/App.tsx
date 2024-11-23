import Button from "./Components/Button";

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-center text-primary mb-5">
        React App
      </h1>
      <Button message="This is a Bootstrap alert with toggle Button!" />
    </div>
  );
};

export default App;
