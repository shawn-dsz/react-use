import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import FoodList from "./_components/FoodList";
import FoodProvider from "./_components/FoodProvider";
import RQProvider from "./_components/RQProvider";
import RQFoodList from "./_components/RQFoodList";

export default function Home() {
  const foodRequest = fetch("http:localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <RQProvider>
      <ErrorBoundary fallback={<div>something went wrong</div>}>
        <FoodProvider foodPromise={foodRequest}>
          <main className="max-w-6xl mx-auto mt-5 text-3xl">
            <Suspense fallback={<div>loading...</div>}>
              <FoodList />
            </Suspense>
            <RQFoodList />
          </main>
        </FoodProvider>
      </ErrorBoundary>
    </RQProvider>
  );
}
