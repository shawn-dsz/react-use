import { ErrorBoundary } from "react-error-boundary";
import FoodList from "./_components/FoodList";
import FoodProvider from "./_components/FoodProvider";

export default function Home() {
  const foodRequest = fetch("http:localhost:3000/api/foods", {
    cache: "no-cache",
  })
    .then((res) => res.json())
    .then((res) => {
      throw new Error("oops");
    });

  return (
    <ErrorBoundary fallback={<div>something went wrong</div>}>
      <FoodProvider foodPromise={foodRequest}>
        <main className="max-w-6xl mx-auto mt-5 text-3xl">
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
        </main>
      </FoodProvider>
    </ErrorBoundary>
  );
}
