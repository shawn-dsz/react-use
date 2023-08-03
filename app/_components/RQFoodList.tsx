"use client";

import { useFoodPromise } from "./FoodProvider";
import { useQuery } from "@tanstack/react-query";

export default function FoodList() {
  const foodPromise = useFoodPromise();

  const { data: foods, isFetching } = useQuery(["foods"], () => foodPromise);

  if (isFetching) return <div>loading...</div>;

  return <div>RQFoods: {foods?.join(", ")}</div>;
}
