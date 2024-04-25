import React from "react";
import RecipeCategory_method from "./RecipeCategory_method";
import RecipeCategory_Type from "./RecipeCategory_Type";
import RecipeCookingTime from "./RecipeCookingTIme";
import RecipeDifficulty from "./RecipeDifficulty";
import RecipeFoodName from "./RecipeFoodName";
import RecipeServing from "./RecipeServing";
import RecipeTitle from "./RecipeTitle";
import CookingTip from "./recipe_cookingtip/Cookingtip";
import IngredientsAdd from "./recipe_ingredients/IngredientsAdd";
import SauceAdd from "./recipe_ingredients/SauceAdd";
import CookingOrders from "./recipe_orders/CookingOrders";
import TagInput from "./recipe_Tag/TagInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addIngredient, addRecipe } from "../../api/recipe";

const AddRecipeInfo = () => {
  const [recipeTitle, setRecipeTitle] = useState(null);
  const [foodName, setFoodName] = useState(null);
  const [cookingMethodId, setCookingMethodId] = useState(1);
  const [typeId, setTypeId] = useState(1);
  const [servingSize, setServingSize] = useState(0);
  const [level, setLevel] = useState(0);
  const [cookingTime, setCookingTime] = useState(0);
  const [cookingTip, setCookingTip] = useState("");

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const addRecipeHandler = async () => {
    try {
      const res = await addRecipe({
        recipeTitle,
        foodName,
        cookingMethodId,
        typeId,
        servingSize,
        level,
        cookingTime,
        cookingTip,
      });
      // const ingredients = await addIngredient({
      //   name,
      //   type,
      //   ingredientsMeasurement,
      //   description
      // });
      if (res.status === 200) {
        alert("레시피 등록 성공!");
        handleNavigate("/");
      } else {
        alert("레시피 등록 실패...");
      }
    } catch (error) {
      console.error("레시피 등록 오류", error);
      alert("레시피 등록 실패.. 빈 칸이 있는지 확인하세요");
    }
  };

  return (
    <div>
      <div className="p-2"></div>
      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        레시피 등록
      </div>

      <div className="px-10">
        <RecipeTitle
          recipeTitle={recipeTitle}
          setRecipeTitle={setRecipeTitle}
        />
        <RecipeFoodName foodName={foodName} setFoodName={setFoodName} />

        <div className="flex pb-9">
          <RecipeCategory_Type typeId={typeId} setTypeId={setTypeId} />
          <RecipeCategory_method
            cookingMethodId={cookingMethodId}
            setCookingMethodId={setCookingMethodId}
          />
        </div>

        <div className="flex pb-9">
          <RecipeServing
            servingSize={servingSize}
            setServingSize={setServingSize}
          />
          <RecipeDifficulty level={level} setLevel={setLevel} />
          <RecipeCookingTime
            cookingTime={cookingTime}
            setCookingTime={setCookingTime}
          />
        </div>
        <div className="p-2"></div>
      </div>

      <div className="p-5 border border-gray-200 font-bold text-xl bg-zinc-100">
        재료 정보
      </div>
      <div>
        <IngredientsAdd />
        <SauceAdd />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        조리 순서
      </div>
      <div>
        <CookingOrders />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        요리 팁
      </div>
      <div>
        <CookingTip cookingTip={cookingTip} setCookingTip={setCookingTip} />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-zinc-100">
        태그
      </div>
      <div>
        <TagInput />
      </div>

      <div className="p-4 border border-gray-200 font-bold text-xl bg-lime-100">
        <button className="pl-10" onClick={addRecipeHandler}>
          저장
        </button>
        <button className="pl-20" onClick={() => handleNavigate("/")}>
          취소
        </button>
      </div>
    </div>
  );
};

export default AddRecipeInfo;
