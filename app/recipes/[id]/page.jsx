"use client";
import axios from "axios";
import Image from "next/image";
import { use, useState, useEffect } from "react";

function page({ params }) {
  const { id } = use(params);
  const [recipe, setrecipe] = useState();
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setrecipe(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div className="">
      {Loading ? (
        <div className="p-6 grid lg:grid-cols-2 lg:h-screen w-full bg-gray-50">
          <div className="flex order-2 w-full flex-col gap-6 items-start justify-start">
            <div className="h-6 w-[10%] bg-gray-200 rounded "></div>
            <div className="h-8 w-[70%] bg-gray-200 rounded "></div>
            <div className="h-5 w-[30%] bg-gray-200 rounded "></div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
              <span className="bg-gray-200 px-6 py-4 rounded"></span>
            </div>
            <div className="w-full h-[100px] bg-gray-200"></div>
          </div>
          <div className="p-4 order-1 lg:order-2">
            <div className="lg:h-full h-[500px] w-full bg-gray-200"></div>
          </div>
        </div>
      ) : (
        <div className="font-sans justify-center gap-4 items-center grid lg:grid-cols-2 lg:px-6 px-2 bg-lime-600 text-white py-2">
          <div className="order-2 lg:order-1">
            <div className=" flex flex-col gap-4">
              <span className="p-1 bg-fuchsia-600 uppercase tracking-wider shadow rounded w-fit text-white">
                {recipe.cuisine}
              </span>
              <h1 className="text-[36px] lg:text-[54px] font-sans leading-none font-bold">
                {recipe.name}
              </h1>

              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-sans font-bold">Ingredients</h1>
                <ul className="flex flex-wrap gap-2">
                  {recipe.ingredients.map((i) => (
                    <li
                      className="p-1 text-sm bg-white text-black shadow rounded"
                      key={i}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-2xl font-sans font-bold">Instructions</h1>
                <ul className="flex flex-col gap-1">
                  {recipe.instructions.map((x, index) => (
                    <li key={x} className="text-md font-sans font-medium">
                      {index + 1}. {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h1 className="text-2xl font-sans font-bold">
                  Additional Information
                </h1>
                <div className="grid xl:grid-cols-5 gap-3 grid-cols-2 bg-gray-50 rounded shadow p-2 text-black">
                  <div className="flex flex-col gap-3 border-2 p-2">
                    <h1 className="font-bold">Difficulty</h1>
                    <span>{recipe.difficulty}</span>
                  </div>
                  <div className="flex flex-col gap-3 border-2 p-2">
                    <h1 className="font-bold">Time</h1>
                    <span>
                      {recipe.prepTimeMinutes + recipe.cookTimeMinutes} Minutes
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 border-2 p-2">
                    <h1 className="font-bold">Meal Type</h1>
                    <div className="flex gap-2 flex-wrap">
                      {recipe.mealType.map((m) => (
                        <span
                          className="p-1 rounded shadow w-fit text-xs bg-white text-black "
                          key={m}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 border-2 p-2">
                    <h1 className="font-bold">Servings</h1>
                    <span>{recipe.servings}</span>
                  </div>
                  <div className="flex flex-col gap-3 border-2 p-2">
                    <h1 className="font-bold">Calories</h1>
                    <span>{recipe.caloriesPerServing} Per Serving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 items-center justify-center flex">
            <Image
              src={recipe.image}
              alt="recipe image"
              height={1000}
              width={1000}
              className="h-[400px] lg:h-[700px] w-screen object-cover border-4 border-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
