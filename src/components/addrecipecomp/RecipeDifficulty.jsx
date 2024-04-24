import React from "react";

const RecipeDifficulty = () => {
  return (
    <>
      <select
        className="bg-gray-50 mr-5 pr-10 border rounded-md border-gray-300"
        name="difficulty"
        id="difficulty"
        text="난이도"
      >
        <option value>난이도</option>
        <option value={1}>아무나</option>
        <option value={2}>초급</option>
        <option value={3}>중급</option>
        <option value={4}>고급</option>
        <option value={5}>신</option>
      </select>
    </>
  );
};
export default RecipeDifficulty;
