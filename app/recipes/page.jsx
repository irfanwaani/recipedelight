import React from "react";
import Recipes from "../components/Recipes";

function page() {
  return (
    <div>
      <div className="w-full h-[200px] bg-[url('https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat">

      </div>
      <Recipes heading={"Recipes"} limit={100} sort="name"/>
    </div>
  );
}

export default page;
