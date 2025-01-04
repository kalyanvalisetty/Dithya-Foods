import p_img1 from './Avakaya.jpg'
import p_img2 from './Magaya.jpg'
import p_img3 from './Bellam-Avakaya.jpg'
import p_img4 from './Bellam-Magaya.jpg'
import p_img5 from './Velluli-Avakaya.jpg'
import p_img6 from './Allam-Velluli-Avakaya.jpg'
import p_img7 from './Tomato-Pachchadi.jpg'
import p_img8 from './Velaga-Pachchadi.jpg'
import p_img9 from './Gongura.jpg'
import p_img10 from './Allam-Pachchadi.jpg'
import p_img11 from './korivikaram.jpg'
import p_img12 from './Palla-Gongura.jpg'
import p_img13 from './Chintakaya.jpg'
import p_img14 from './Usirikaya.jpg'
import p_img15 from './Dabbakaya.jpg'
import p_img16 from './Nimmakaya.jpg'
import p_img17 from './Palla-Usiri.jpg'
import p_img18 from './nallakaram.jpg'
import p_img19 from './Kandi-Podi.jpg'
import p_img20 from './Karivepaku-Podi.jpg'
import p_img21 from './Idli-Chutney-Podi.jpg'
import p_img22 from './Nuvvula-Podi.jpg'
import p_img23 from './saggubiyyam_vadiyalu.jpg'
import p_img24 from './biyyappindi_vadiyalu.jpg'
import p_img25 from './gummadi_vadiyalu.jpg'
import p_img26 from './Pottu-Vadiyalu.jpg'
import p_img27 from './Chitti-Vadiyalu.jpg'
import p_img28 from './challa_mirapakayalu.jpg'
import p_img29 from './Muruku.jpg'
import p_img30 from './Chegodi.jpg'
import p_img31 from './Masala-peanuts.jpg'
import p_img32 from './Boondi-mixture.jpg'
import p_img33 from './Boondi.jpg'
import p_img34 from './neti-halwa.jpg'
import p_img35 from './madatha-kaja.jpg'
import p_img36 from './Ariselu.jpg'
import p_img37 from './pootharekulu.jpg'
import p_img38 from './bandar-laddu.jpg'
import p_img39 from './pandugappa.jpg'
import p_img40 from './Nethallu.jpg'
import p_img41 from './Chicken-pickle.jpg'
import p_img42 from './Chicken-boneless-pickle.jpg'
import p_img43 from './Chicken-pickle.jpg'
import p_img44 from './prawns-pickle.jpg'
import p_img45 from './Mutton-pickle.jpg'
import p_img46 from './Mutton-pickle.jpg'
import p_img47 from './fish-pickle.jpg'
import p_img48 from './crab-pickle.jpg'

import logo from './logo.png'
import bannerright from './bannerright.jpg'
import bannerleft from './bannerleft.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.svg'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import error_title from "./error_title.jpg"
import error_img from "./error_img.jpg"
import savouremoji from "./savouremoji.svg"

export const assets = {
    logo,
    bannerright,
    bannerleft,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    error_title,
    error_img,
    savouremoji
}

export const products = [
    {
        _id: "aaaaa",
        name: "Avakaya",
        eng_name:"Mango Pickle",
        description: "Classic taste that stays with you forever - best of all.",
        price: 850,
        image: [p_img1],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Magaya",
        eng_name:"Sun-dried Mango pickle",
        description: "An aromatic preparation that is an all-time favourite of pickle lovers.",
        price: 850,
        image: [p_img2],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Bellam Avakaya",
        eng_name:"Sweet Avakaya",
        description: "An interesting blend of classic Avakaya & jaggery.",
        price: 850,
        image: [p_img3],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Bellam Magaya",
        eng_name:"Sweet Magaya",
        description: "Sun-dried mango pieces marinated in Jaggery & spices.",
        price: 850,
        image: [p_img4],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Velluli Avakaya",
        eng_name:"Garlic Avakaya",
        description: "The tanginess of Garlic, when mixed with the Avakaya, creates a magical taste",
        price: 850,
        image: [p_img5],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Allam Velluli Avakaya",
        eng_name:"Ginger Garlic Avakaya",
        description: "Peppery spicy aroma of Ginger with tanginess of Garlic",
        price: 850,
        image: [p_img6],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Tomato Pachchadi",
        eng_name:"Tomato Pickle",
        description: "Tangy, hot and sour taste that wakes up your senses",
        price: 850,
        image: [p_img7],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Velaga Pachchadi",
        eng_name:"Wood Apple Pickle",
        description: "Spicy, Sweet and Tangy Velaga Pachhadi",
        price: 850,
        image: [p_img8],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Gongura",
        eng_name:"Sorrel Leaves Pickle",
        description: "A spicy pickle that is the heartthrob of every Telugu-speaking person.",
        price: 850,
        image: [p_img9],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Allam-Pachchadi",
        eng_name:"Ginger Pickle",
        description: "Sweet and Spicy ginger pickle for anytime and anything",
        price: 850,
        image: [p_img10],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "korivikaram",
        eng_name:"Red Chilli Pickle",
        description: "A spicy red chilli preparation with an earthy taste",
        price: 850,
        image: [p_img11],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Palla Gongura",
        eng_name:"Red Chilli Gongura Pickle",
        description: "A brilliant combination of Gongura and Red Chillies",
        price: 850,
        image: [p_img12],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Chintakaya",
        eng_name:"Tamarind Pickle",
        description: "A sharp, spicy and tangy flavoured pickle that has no match.",
        price: 850,
        image: [p_img13],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Usirikaya",
        eng_name:"Amla Pickle",
        description: "A spicy, tangy taste that always leaves space for more.",
        price: 850,
        image: [p_img14],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Dabbakaya",
        eng_name:"Citron Pickle",
        description: "Tanginess and Spice brilliantly balanced by a dash of sourness.",
        price: 850,
        image: [p_img15],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Nimmakaya",
        eng_name:"Lemon Pickle",
        description: "Juicy marinated lemon pickle with an irresistible aroma.",
        price: 850,
        image: [p_img16],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Palla Usiri",
        eng_name:"Red Chilli Amla Pickle",
        description: "A balanced mixture of sour and spiciness",
        price: 850,
        image: [p_img17],
        category: "veg",
        subCategory: "pickles",
        sizes: ["250g", "500g", "1kg"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Nallakaram",
        eng_name:"Karapu Podi",
        description: "A Hot, Spicy and Tangy powder that lights up your breakfast experience.",
        price: 750,
        image: [p_img18],
        category: "veg",
        subCategory: "powders",
        sizes: ["250g", "500g", "1kg"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Kandi Podi",
        eng_name:"Toor Dal Powder",
        description: "Spicy lentil powder that goes great with hot rice.",
        price: 750,
        image: [p_img19],
        category: "veg",
        subCategory: "powders",
        sizes: ["250g", "500g", "1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Karivepaku Podi",
        eng_name:"Curry Leaves Powder",
        description: "Sour and Spicy Curry Leaves powder.",
        price: 750,
        image: [p_img20],
        category: "veg",
        subCategory: "powders",
        sizes: ["250g", "500g", "1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Idli Chutney Podi",
        eng_name:"Idli Chutney Podi",
        description: "Flavourful spicy chutney powder that goes with South Indian breakfast",
        price: 750,
        image: [p_img21],
        category: "veg",
        subCategory: "powders",
        sizes: ["250g", "500g", "1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Nuvvula Podi",
        eng_name:"Sesame Seeds Powder",
        description: "Aromatic roasted sesame seed powder that tastes therapeutic.",
        price: 750,
        image: [p_img22],
        category: "veg",
        subCategory: "powders",
        sizes: ["250g", "500g", "1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Saggubiyyam Vadiyalu",
        eng_name:"Sabudana Crisps",
        description: "A light crunchy and tasty addition to your food",
        price: 440,
        image: [p_img23],
        category: "veg",
        subCategory: "papads",
        sizes: ["250g", "500g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Biyyam Pindi Vadiyalu",
        eng_name:"Rice Flour Crisps",
        description: "A deep-fried mouth-watering snack that plays the part of a perfect accompaniment.",
        price: 440,
        image: [p_img24],
        category: "veg",
        subCategory: "papads",
        sizes: ["250g", "500g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Gummadi Vadiyalu",
        eng_name:"Ash Gourd Crisps",
        description: "Crunchy spicy aromatic additions to your meal",
        price: 700,
        image: [p_img25],
        category: "veg",
        subCategory: "papads",
        sizes: ["250g", "500g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Pottu Vadiyalu",
        eng_name: "Urad Dal Peel Crisps",
        description: "A unique crunchy blend of aroma and taste.",
        price: 600,
        image: [p_img26],
        category: "veg",
        subCategory: "papads",
        sizes: ["250g", "500g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Chitti Vadiyalu",
        eng_name: "Urad Dal Crisps",
        description: "Tiny crunchy munchies with an incredible taste.",
        price: 600,
        image: [p_img27],
        category: "veg",
        subCategory: "papads",
        sizes: ["250g", "500g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Challa Mirapakayalu",
        eng_name: "Curd Chillies",
        description: "Sun-dried chillies marinated in curd. A great accompaniment to your meal.",
        price: 850,
        image: [p_img28],
        category: "veg",
        subCategory: "papads",
        sizes: ["250g", "500g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Muruku",
        description: "Crispy, Crunchy snack from the heart of South India.",
        price: 135,
        image: [p_img29],
        category: "veg",
        subCategory: "snacks",
        sizes: ["200g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Chegodi",
        description: "Crunchy, Soft and delicious rings.",
        price: 135,
        image: [p_img30],
        category: "veg",
        subCategory: "snacks",
        sizes: ["200g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Masala Peanuts",
        description: "Spicy masala-coated fried groundnuts.",
        price: 160,
        image: [p_img31],
        category: "veg",
        subCategory: "snacks",
        sizes: ["200g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Boondi Mixture",
        description: "A perfect balance of peanuts, boondi, corn flakes, sev and fried curry leaves.",
        price: 135,
        image: [p_img32],
        category: "veg",
        subCategory: "snacks",
        sizes: ["200g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Boondi",
        description: "A cool snack that just melts in your mouth.",
        price: 135,
        image: [p_img33],
        category: "veg",
        subCategory: "snacks",
        sizes: ["200g"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Bandaru Neti Halwa",
        description: "Bandaru Halwa is the halwa specialty of the Telugu people - prepared in a unique way with wheat flour as the main ingredient, and topped with a generous amount of cashews and other dry fruits.This sweet is guaranteed to melt in your mouth",
        price: 700,
        image: [p_img34],
        category: "veg",
        subCategory: "sweets",
        sizes: ["200g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Madatha Khaja",
        description: "Tapeswaram Madatha Kaja/Thapeswaram Madatha Khaja is an intensely fried pastry steeped in sugar syrup that would make the final product juicy and crispy, giving the final hint of sweet flavor.",
        price: 700,
        image: [p_img35],
        category: "veg",
        subCategory: "sweets",
        sizes: ["200g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Neti Ariselu",
        description: "Indulge in the rich heritage and impeccable taste of Aariselu a timeless classic that is perfect for any occasion.",
        price: 800,
        image: [p_img36],
        category: "veg",
        subCategory: "sweets",
        sizes: ["200g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Pootharekulu",
        description: "Our Assorted Pootharekulu, a delectable assortment of traditional Indian sweets that offers a delightful twist on a classic treat.",
        price: 600,
        image: [p_img37],
        category: "veg",
        subCategory: "sweets",
        sizes: ["6pieces","12pieces"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Bandar laddu",
        description: "Bandar Laddu is a iconic traditional sweet that holds a special place in South Indian celebrations, symbolizing joy, festivity, and togetherness.",
        price: 1000,
        image: [p_img38],
        category: "veg",
        subCategory: "sweets",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Pandugappa",
        eng_name: "Dry sea bass fish",
        description: "Head peeled and intestine removed which makes you to cook immediately. Rich in Protein and Omega 3",
        price: 1200,
        image: [p_img39],
        category: "non-veg",
        subCategory: "Dry items",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Nethallu",
        eng_name: "Dry Anchovies fish",
        description: "Dry Fish Nethli-Big Cut & Clean Common Salt",
        price: 1000,
        image: [p_img40],
        category: "non-veg",
        subCategory: "Dry items",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Chicken Pickle",
        description: "Our Chicken pickle is a feast to Relish, the flavours of chicken marinated with special spices.This yummylishious pickle has its own flavor of aromatic masala magic, once tasted can't you get enough to satisfy the tastebuds and will finish it off.",
        price: 800,
        image: [p_img41],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Chicken boneless Pickle",
        description: "Our Chicken pickle is a feast to Relish, the flavours of chicken marinated with special spices.This yummylishious pickle has its own flavor of aromatic masala magic, once tasted can't you get enough to satisfy the tastebuds and will finish it off.",
        price: 1000,
        image: [p_img42],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Naatu kodi pickle",
        eng_name:"Country chicken pickle",
        description: "Our Chicken pickle is a feast to Relish, the flavours of chicken marinated with special spices.This yummylishious pickle has its own flavor of aromatic masala magic, once tasted can't you get enough to satisfy the tastebuds and will finish it off.",
        price: 1200,
        image: [p_img43],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Royyala Pachadi",
        eng_name:"Prawns pickle",
        description: "Our Prawns pickle has its own flavor of aromatic masala magic, made from high quality fresh prawns. Tastes too good",
        price: 1200,
        image: [p_img44],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Mutton Pickle",
        description: "Our Mutton pickle is a tender and flavour rich, once tasted the taste and flavour will make you keep on ordering",
        price: 1200,
        image: [p_img45],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Mutton Boneless Pickle",
        description: "Our Mutton pickle is a tender and flavour rich, once tasted the taste and flavour will make you keep on ordering",
        price: 1500,
        image: [p_img46],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Fish Pickle",
        description: "Classic taste that stays with you forever - best of all",
        price: 800,
        image: [p_img47],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Crab Pickle",
        description: "A unique pickle made from fresh local crabs that has no match.",
        price: 1200,
        image: [p_img48],
        category: "non-veg",
        subCategory: "pickles",
        sizes: ["250g","500g","1kg"],
        date: 1716632145448,
        bestseller: false
    }
]