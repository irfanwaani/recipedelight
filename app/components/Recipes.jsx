"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Recipes({ heading, limit = 8, sort = "name" }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/recipes?limit=${limit}&sortBy=${sort}`
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [limit, sort]);

  return (
    <div className="px-4 lg:px-12">
      <div className="py-6">
        <h1 className="text-[60px] font-bold">{heading}</h1>
        <hr className="w-[150px] border-4 bg-gray-950" />
      </div>
      {loading ? (
        <div className="py-12">
          <div className="grid w-full sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: limit }).map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-col h-[400px] bg-gray-50 animate-pulse"
              >
                <div className="flex-1 bg-gray-300"></div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="h-[10px] w-[260px] bg-gray-100"></div>
                  <div className="h-[10px] w-[200px] bg-gray-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-12">
          <div className="grid w-full sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.recipes.map((x) => (
              <Link
                href={`/recipes/${x.id}`}
                key={x.id}
                className="shadow-md w-full hover:shadow-2xl duration-100 bg-slate-50"
              >
                <div className="h-[350px] relative">
                  <Image
                    src={x.image}
                    height={1000}
                    alt="Recipe Image"
                    width={1000}
                    className="h-full object-cover object-center w-full mx-auto"
                  />
                  <div className="absolute bottom-0 w-full text-center bg-white shadow text-black z-40">
                    <h1 className="uppercase tracking-wider font-sans">
                      {x.name}
                    </h1>
                  </div>
                  <div className="absolute top-2 p-1 text-sm w-fit right-2 text-center bg-lime-600 text-white z-40">
                    <h1 className="uppercase tracking-wider font-sans">
                      {x.cuisine}
                    </h1>
                  </div>
                </div>
                <div className="relative p-3 w-full flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="">
                      <h1 className="font-bold">Difficulty</h1>
                      <span className="bg-white p-1 rounded shadow">
                        {x.difficulty}
                      </span>
                    </div>
                    <div className="">
                      <h1 className="font-bold">Cooktime</h1>
                      <span className="bg-white p-1 rounded shadow">
                        {x.prepTimeMinutes + x.cookTimeMinutes} Mins
                      </span>
                    </div>
                    <div className="col-span-2 flex flex-col gap-1">
                      <h1 className="font-bold">Meal Type</h1>
                      <div className="flex flex-wrap gap-4">
                        {x.mealType.map((m) => (
                          <span key={m} className="bg-white p-1 rounded shadow">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipes;
