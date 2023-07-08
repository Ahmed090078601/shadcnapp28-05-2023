export interface NavbarItemType{
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: Array <NavbarItemType>
};

export const NavbarArray: Array<NavbarItemType> = [
    {
        label: "Female",
        href:'/',
        isDropDown:true,
        dropDownData:[
            {
                label: "Dresses",
                href: "/",
                isDropDown: false,
            },
            {
            label: "T-Shirts",
            href:"/",
            isDropDown: false,
            },
            {
                label: "Pents",
                href:"/",
                isDropDown: false,
                },
                {
                    label: "Jackets",
                    href:"/",
                    isDropDown: false,
                    },
                    {
                        label: "Sweater",
                        href:"/",
                        isDropDown: false,
                        },
        ]
    },
    {
        label: "Male",
        href: "/",
        isDropDown: true,
        dropDownData: [
            {
                label: "Sweaters",
                href: "/",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href: "/",
                isDropDown: false,
            }
        ]
    },
    {
                label: "Kids",
                href: "/",
                isDropDown: false,
    },
    {
                label: "All Products",
                href: "/product",
                isDropDown: false,
    }

]