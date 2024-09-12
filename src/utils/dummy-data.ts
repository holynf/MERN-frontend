import { BranchesItemsTypes, MenuItemsTypes } from "./interfaces.ts";
import {
    menuImage1,
    menuImage2,
    menuImage3,
    menuImage4,
    branchesImage1,
    branchesImage2,
} from "../components/shared/images.ts";

export const menuItems: MenuItemsTypes[] = [
    {
        image: menuImage1,
        title: "دسر",
        key: "dessert",
        route: "menu/dessert",
    },
    {
        image: menuImage2,
        title: "غذای اصلی",
        key: "main-dish",
        route: "menu/main-dish",
    },
    {
        image: menuImage3,
        title: "پیش غذا",
        key: "appetizer",
        route: "menu/appetizer",
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