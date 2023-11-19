

const cookie = {
    base: "cookie",
    madeIn: "korea"
};

const chocoCookie = {
    ...cookie,
    toping: "choco"
};

console.log(chocoCookie); // base: cookie, madeIn: korea, toping: choco


const baseCookie = ['��Ű1', '��Ű2'];
const topingCookie = ['������Ű', '������Ű', '�ٴҶ���Ű'];

const allCookie = [...baseCookie, '�Ϲ���Ű', ...topingCookie];
console.log(allCookie); // ��Ű1, ��Ű2, �Ϲ���Ű, ������Ű, ������Ű, �ٴҶ���Ű


