import FoodList from "./_components/FoodList";
import FoodProvider from "./_components/FoodProvider";

export default function Home() {
  const foodRequest = fetch("http:localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <FoodProvider foodPromise={foodRequest}>
      <main className="max-w-6xl mx-auto mt-5 text-3xl">
        <FoodList />
        <FoodList />
        <FoodList />
        <FoodList />
      </main>
    </FoodProvider>
  );
}
