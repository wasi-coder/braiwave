import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world</h1>

      <div className="flex pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10 mr-4" href="#login">
          Something
        </Button>
        <Button className="mt-10" href="#signup">
          Another Button
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
