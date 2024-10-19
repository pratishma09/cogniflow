import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

function App() {
  return (
    <>
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] ">
        <Button className="mt-10" href="#login">
          Main
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
