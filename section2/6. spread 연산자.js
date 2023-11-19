

const cookie = {
    base: "cookie",
    madeIn: "korea"
};

const chocoCookie = {
    ...cookie,
    toping: "choco"
};

console.log(chocoCookie); // base: cookie, madeIn: korea, toping: choco


const baseCookie = ['ÄíÅ°1', 'ÄíÅ°2'];
const topingCookie = ['µş±âÄíÅ°', 'ÃÊÄÚÄíÅ°', '¹Ù´Ò¶óÄíÅ°'];

const allCookie = [...baseCookie, 'ÀÏ¹İÄíÅ°', ...topingCookie];
console.log(allCookie); // ÄíÅ°1, ÄíÅ°2, ÀÏ¹İÄíÅ°, µş±âÄíÅ°, ÃÊÄÚÄíÅ°, ¹Ù´Ò¶óÄíÅ°


