

function isKoreanFood(food) {
    if (['ºÒ°í±â', '¶±ººÀÌ', 'ºñºö¹ä'].includes(food)) {
        return true;
    } else {
        return false;
    }
}

const food1 = 'ºñºö¹ä';
console.log(isKoreanFood(food1)); // true
const food2 = 'ÆÄ½ºÅ¸';
console.log(isKoreanFood(food2)); // false



const meal = {
    ÇÑ½Ä: "ºÒ°í±â",
    Áß½Ä: "¸àº¸»þ",
    ÀÏ½Ä: "ÃÊ¹ä",
    ¾ç½Ä: "½ºÅ×ÀÌÅ©"
}
const getMeal = (mealType) => {
    return meal[mealType] || "±¾±â";
}

console.log(getMeal("Áß½Ä")); // ¸àº¸»þ
console.log(getMeal()); // ±¾±â