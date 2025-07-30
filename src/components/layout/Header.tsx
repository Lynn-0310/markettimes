import Image from "next/image";
import React from "react";
import IconHamburger from "../icons/IconHamburger";
import MenuHeader from "./MenuHeader";

export default function Header() {



     const menuHeader = [
          { name: "Trang chủ", slug: '/' },
          { name: "Tiêu điểm", slug: '/tieuDiem' },
          { name: "thẩm định giá", slug: '/thamDinh' },
          { name: "tài chính", slug: '/taiChinh' },
          { name: "kinh doanh", slug: 'kinhDoanh' },
          { name: "thế giới", slug: 'theGioi' },
          { name: "công nghệ", slug: 'congNghe' },
          { name: "bất động sản", slug: 'batDongSan' },
          { name: "ngành hàng", slug: 'nganhHang' }
     ]


     return (
          <>
               <div className="lg:bg-black/5 lg:h-[42px] lg:flex lg:text-center lg:items-center hidden" >
                    <div className="container">
                         <ul className="flex gap-0.5 ">
                              <li><a href="#" className="font-bold"> Tạp chí điện tử Nhịp sống thị trường </a></li>
                              <li> | </li>
                              <li><a href="#">25/07/2025</a></li>
                         </ul>

                    </div>
               </div>

               <div className="max-[1024px]:fixed max-[1024px]:w-full max-[1024px]:top-0 max-[1024px]:left-0 max-[1024px]:z-10 max-[1024px]:bg-[#f7f2e7] shadow-[0_4px_12px_rgba(0,0,0,0.1)]" >
                    <div className="container">
                         <div className="flex lg:justify-around lg:h-[110px] lg:pt-[21px] h-[100px] justify-between align-center items-center pt-[20px] ">
                              <IconHamburger />
                              <div className="lg:block hidden"></div>

                              <Image
                                   src="/logo.svg"
                                   alt="Logo"
                                   width={0}              // Bắt buộc để dùng style
                                   height={0}
                                   sizes="100vw"          // Cho responsive nếu cần
                                   className="w-auto h-[40px] max-w-[100%] lg:h-[68px]"
                              />
                              <Image
                                   src="/icon20-search.svg"
                                   alt="Logo"
                                   width={20}
                                   height={20}
                              />
                         </div>
                    </div>
               </div>

               <MenuHeader menuHeader={menuHeader} />

          </>
     )
}