import React from 'react'
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Wrapper from '../shared/Wrapper';

export default function Hero() {
    return (
        <>
            <Wrapper>
                <div className="flex mb-4">
                    <div className="w-1/2  ">

                        <div >
                            <Button className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-2xl mt-28 bg-blue-100 text-blue-500">
                                Sale 70%</Button>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mt-10">

                                An Industrial Take on Streetwear
                            </h1>

                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king, seeing how much happier his subjects were, realized the error of
                                his ways and repealed the joke tax.
                            </p>
                            <Button className="m-5  ">
                                <ShoppingCart className="mr-2 h-5 w-5 " /> Start Shopping
                            </Button>
                        </div>
                        <div className='flex gap-3'>
                            <Image src="/Featured1.webp" width={100} height={200} alt="nxt" />
                            <Image src="/Featured2.webp" width={100} height={200} alt="nxt" />
                            <Image src="/Featured3.webp" width={100} height={200} alt="nxt" />
                            <Image src="/Featured4.webp" width={100} height={200} alt="nxt" />
                        </div>       </div>

                    <div className="m-8 relative max-w-2xl">
                        <Image src="/header.webp" width={1200} height={840} alt="nxt" />
                        <div className="absolute bg-orange-100 top-10 left-10 right-10 rounded-full bottom-1 z-[-1]"></div>
                    </div>
                </div>

            </Wrapper>
        </>
    )
}
