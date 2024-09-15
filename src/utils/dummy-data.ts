import { BranchesItemsTypes, MenuItemsTypes, secondLandingItemsTypes } from "./interfaces.ts";
import {
    menuImage1,
    menuImage2,
    menuImage3,
    menuImage4,
    branchesImage1,
    branchesImage2,
} from "../components/shared/images.ts";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const menuItems: MenuItemsTypes[] = [
    {
        image: menuImage3,
        title: "غذای اصلی",
        key: "main-dish",
        route: "menu/main-dish",
    },
    {
        image: menuImage2,
        title: "پیش غذا",
        key: "appetizer",
        route: "menu/appetizer",
    },
    {
        image: menuImage1,
        title: "دسر",
        key: "dessert",
        route: "menu/dessert",
    },
    {
        image: menuImage4,
        title: "نوشیدنی",
        key: "drink",
        route: "menu/drink",
    },
];

export const branchesItems: BranchesItemsTypes[] = [
    {
        branchId: 1,
        location: "tehran",
        image: branchesImage1,
        title: "شعبه اکباتان",
        key: "tehran-ekbatan",
        route: "branches/tehran-ekbatan",
        short_description: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    },
    {
        branchId: 2,
        location: "chaloos",
        image: branchesImage2,
        title: "شعبه چالوس",
        key: "chaloos",
        route: "branches/chaloos",
        short_description: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    },
    {
        branchId: 3,
        location: "tehran",
        image: branchesImage1,
        title: "شعبه اقدسیه",
        key: "tehran-aghdasie",
        route: "branches/tehran-aghdasie",
        short_description: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸، واحد ۳",
    },
    {
        branchId: 4,
        location: "tehran",
        image: branchesImage2,
        title: "شعبه ونک",
        key: "tehran-poonak",
        route: "branches/tehran-poonak",
        short_description: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    },
];

export const secondLandingItems: secondLandingItemsTypes[] = [
    {
        id: 1,
        title: "پرسنلی مجرب و حرفه‌ای",
        icon: PersonIcon,
    },
    {
        id: 2,
        title: "کیفیت بالای غذاها",
        icon: BarChartIcon,
    },
    {
        id: 3,
        title: "محیطی دلنشین و آرام",
        icon: MyLocationIcon,
    },
    {
        id: 4,
        title: "منوی متنوع",
        icon: MenuBookIcon,
    },
];

export const footerItems = [
    {
        title: "دسترسی آسان",
        items: [
            { title: "پرسش‌های متداول", route: "questions" },
            { title: "قوانین ترخینه", route: "rules" },
            { title: "حریم خصوصی", route: "privacy" },
        ],
    },
    {
        title: "شعبه‌های ترخینه",
        items: branchesItems,
    },
];
