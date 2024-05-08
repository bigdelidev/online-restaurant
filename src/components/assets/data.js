import beefBurger from '../images/beef burger.jpg'
import cheezeBurger from '../images/cheeze burger.jpg'
import chickenBurger from '../images/chicken burger.jpg'
import fishBurger from '../images/fish burger.jpg'
import hamburger from '../images/hamburger.jpg'
import hotDog from '../images/hot dog.jpg'
import mushroomBurger from '../images/mushroom burger.jpg'
import specialMushroomBurger from '../images/special mushroom burger.jpg'
import turkeyBurger from '../images/turkey burger.jpg'
import beefPizza from '../images/beef pizza.jpg'
import pepperoniPizza from '../images/pepperoni pizza.jpg'
import vegetablePizza from '../images/vegetable pizza.jpg'
import rectangularBeefPizza from '../images/rectangular beef pizza.jpg'
import rectangularVegetablePizza from '../images/rectangular vegetable pizza.jpg'
import rectangularSpecialHotDog from '../images/rectangular special hot dog.jpg'




const slideshow = [
    {
        img: rectangularBeefPizza
    },
    {
        img: rectangularSpecialHotDog
    },
    {
        img: rectangularVegetablePizza
    }
]




const discount = [
    {
        id: '3',
        title: "chicken burger",
        img: chickenBurger,
        category: "sandwich",
        price: "7"
    },
    {
        id: '12',
        title: "vegetable pizza",
        img: vegetablePizza,
        category: "pizza",
        price: "15"
    },
    {
        id: '7',
        title: "hot dog",
        img: hotDog,
        category: "sandwich",
        price: "5"
    },
    {
        id: '1',
        title: 'beef burger',
        img: beefBurger,
        category: "sandwich",
        price: "16"
    },
    {
        id: '6',
        title: "hamburger",
        img: hamburger,
        category: "sandwich",
        price: "10"
    },
    {
        id: '8',
        title: "mushroom burger",
        img: mushroomBurger,
        category: 'sandwich',
        price: '12'
    },
    {
        id: '9',
        title: "pepperoni pizza",
        img: pepperoniPizza,
        category: "pizza",
        price: "20"
    }
];



const popular = [
    {
        id: '1',
        title: 'beef burger',
        img: beefBurger,
        category: "sandwich",
        price: "16"
    },
    {
        id: '2',
        title: 'beef pizza',
        img: beefPizza,
        category: "pizza",
        price: "30"
    },
    {
        id: '3',
        title: "chicken burger",
        img: chickenBurger,
        category: "sandwich",
        price: "7"
    },
    {
        id: '4',
        title: 'cheeze burger',
        img: cheezeBurger,
        category: "sandwich",
        price: "12"
    },
    {
        id: '5',
        title: "fish burger",
        img: fishBurger,
        category: "sandwich",
        price: "11"
    },
    {
        id: '6',
        title: "hamburger",
        img: hamburger,
        category: "sandwich",
        price: "10"
    },
    {
        id: '7',
        title: "hot dog",
        img: hotDog,
        category: "sandwich",
        price: "5"
    },
    {
        id: '8',
        title: "mushroom burger",
        img: mushroomBurger,
        category: 'sandwich',
        price: '12'
    },
    {
        id: '9',
        title: "pepperoni pizza",
        img: pepperoniPizza,
        category: "pizza",
        price: "20"
    },
    {
        id: '10',
        title: "special mushroom burger",
        img: specialMushroomBurger,
        category: "sandwich",
        price: "18"
    },
    {
        id: '11',
        title: "turkey burger",
        img: turkeyBurger,
        category: "sandwich",
        price: "14"
    },
    {
        id: '12',
        title: "vegetable pizza",
        img: vegetablePizza,
        category: "pizza",
        price: "15"
    },
]



export { slideshow, discount, popular };