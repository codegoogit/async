const enter = () => console.log('입장')
const orderCoffee = () => {
    return new Promise((resolve) => {
        console.log('커피 주문')

        const 커피나옴 = () => {
            console.log('> 커피 나옴')
            resolve('아메리카노')
        }

        setTimeout(커피나옴, 3000)
    })
}
const drinkCoffee = (coffee) => console.log(`${coffee} 커피 마심`)
const orderDessert = () => {
    console.log('디저트 주문')

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('> 디저트 나옴')
            resolve()
        }, 5000)
    })
}
 const eatDessert = () => console.log('디저트 먹음')
 const watchYoutube = () => console.log('유튜브 시청')
 const exit = () => console.log('>> 퇴장')

// 코드 시작
enter()

orderDessert()
    .then(eatDessert)
    .then(orderCoffee)
    .then(drinkCoffee)
    .then(exit)

watchYoutube()