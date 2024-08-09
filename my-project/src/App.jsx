import "./App.css";
import Card from "./Card";
import Payment from "./Payment";

function App() {
  return (
    <div className="container mx-auto bg-zinc-100 p-4 space-y-10">
      {/* header */}
      <div>
        <h1 className="text-secondary text-2xl text-extrabold text-center lg:text-right ">
          سبد دوره های شما
        </h1>
      </div>

      {/* main */}
      <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-3 gap-x-8 xl:gap-x-24">
        {/* Card */}
        <div className="rounded-2xl flex flex-col lg:col-span-2 gap-y-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Payment */}
        <Payment />
      </div>
    </div>
  );
}

export default App;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> */
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> */
}
{
  /* <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /> */
}
{
  /* </svg> */
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> */
}
{
  /* <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /> */
}
{
  /* </svg> */
}
