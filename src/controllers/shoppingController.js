const foods = [
    {
        name: "달콤 시그니처 머핀",
        category: "muffine",
        rate: 4.7,
        price: 3000,
        reviewNum: 27,
    },
    {
        name: "달콤 시그니처 케이크",
        category: "cake",
        rate: 4.2,
        price: 23000,
        reviewNum: 327,
    },
    {
        name: "달콤 발렌타인 초코 머핀",
        category: "muffine",
        rate: 5.0,
        price: 5000,
        reviewNum: 296,
    },
    {
        name: "달콤 화이트데이 케이크",
        category: "cake",
        rate: 4.9,
        price: 43000,
        reviewNum: 91,
    },
    {
        name: "달콤 사랑에 빠진 머핀",
        category: "muffine",
        rate: 3.1,
        price: 10000,
        reviewNum: 12,
    },
    {
        name: "달콤 초특급 수제 초콜릿 케이크",
        category: "cake",
        rate: 5.0,
        price: 53000,
        reviewNum: 1193,
    },
    {
        name: "사랑에 빠진 딸기 케이크",
        category: "cake",
        rate: 3.0,
        price: 45000,
        reviewNum: 72,
    },
    {
        name: "엄마는 지구인 머핀",
        category: "muffine",
        rate: 4.8,
        price: 2000,
        reviewNum: 8133,
    },
    {
        name: "민트초코 케이크",
        category: "cake",
        rate: 3.5,
        price: 23000,
        reviewNum: 28,
    },
    {
        name: "달콤 스페셜 치즈 머핀",
        category: "muffine",
        rate: 4.5,
        price: 4500,
        reviewNum: 193,
    },
    {
        name: "한가위 송편 케이크",
        category: "cake",
        rate: 2.3,
        price: 103000,
        reviewNum: 239,
    },
    {
        name: "달콤 초특급 수제 초콜릿 케이크",
        category: "cake",
        rate: 5.0,
        price: 53000,
        reviewNum: 1193,
    },


]

export const shoppingController = (req, res) => res.render(
    "shopping", 
    {
        titleName: "shopping",
        foods: foods
    }
    );
export const muffineController = (req, res) => res.render(
    "muffine", 
    {
        titleName: "shopping",
        foods: foods
    }
);

export const cakeController = (req, res) => res.render(
    "cake", 
    {
        titleName: "cake",
        foods: foods
    }
);