import { Button } from "./component/Button";

export default function App() {

   const handleClick = () => {
    alert('Button clicked!');
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-red-600 text-4xl font-bold">
        Tailwind Works! 🎉
      </h1>
     <Button color="green" onClick={handleClick}>Click Me</Button>
      <Button color="red" onClick={handleClick}>Delete</Button>
    </div>
  );
}
