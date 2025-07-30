'use client';
import React, { useEffect, useRef, useState } from 'react'

export default function MenuHeader({ menuHeader }: { menuHeader: { name: string, slug: string }[] }) {
    const [scrollY, setScrollY] = useState(0);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        if (scrollY > 150) {
            menuRef.current?.classList.add('isFixed');
        } else {
            menuRef.current?.classList.remove('isFixed');
        }

    }, [scrollY])


    return (
        <div ref={menuRef} className="lg:bg-black/5 lg:h-[42px] lg:flex lg:text-center lg:items-center hidden " >
            <div className="container flex">
                {
                    menuHeader && menuHeader.length > 0 && menuHeader.map((item, index) => {
                        return (
                            <a key={index} href={item.slug} className=" uppercase h-[42px] leading-[42px] text-[#797A7E] px-[7px] font-medium">
                                {item.name}
                            </a>
                        );

                    })
                }
            </div>

        </div>
    )
}
