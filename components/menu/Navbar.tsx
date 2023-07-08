// import Image from "next/image";
// import { Search, ShoppingCart } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "../ui/navigation-menu";
// import Wrapper from "../shared/Wrapper";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <Wrapper>
//     <nav className="flex justify-between items-center h-20 px-20">
//       <Image src={"/Logo1.webp"} alt="website logo" width={150} height={150} />
//       <div>
//         <NavigationMenu>
//       <NavigationMenuList >
//         <NavigationMenuItem >
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className="p-4 gap-3">
//               Female
//             </NavigationMenuLink>
//           </Link>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className="p-4 gap-3">
//             Male
//             </NavigationMenuLink>
//           </Link>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className="p-4 gap-3">
//             Kids
//             </NavigationMenuLink>
//           </Link>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className="p-4 gap-3">
//             All Products
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//       </NavigationMenu>
//       </div>
//       <div className="flex ">
//         <Search className="bg-white rounded-l" />{" "}
//         <input
//           type="text"
//           placeholder="What you are looking for"
//           className="rounded-r"
//         ></input>
//       </div>
//       <div className="p-2 rounded-full bg-gray-300">
//         <ShoppingCart className="relative" />
//         <span className="absolute top-2 right-30 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
//           0
//         </span>
//       </div>
//     </nav>
//     </Wrapper>
//   );
// };

// export default Navbar;
