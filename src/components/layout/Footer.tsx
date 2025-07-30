import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        < div className=' border-t-2 border-[#D8D3CD] bg-[#F7F2E7]' >
            <div className='container'>
                <div className=' py-[25px] px-0 lg:flex lg:flex-row md:py-[30px] md:px-0' >
                    <div className=' mb-[15px] flex justify-center text-center lg:pr-5 lg:justify-start'>
                        <a href="#">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={200}
                                height={0}
                                className="h-auto"
                            />
                        </a>
                    </div>
                    <div className='text-[13px] m-0 text-[#797A7E] line-height-[1.4] w-full lg:w-[calc(100%-220px)]'>
                        <p>Cơ quan của Hội Thẩm định giá Việt Nam</p>
                        <p>Tổng biên tập: Nguyễn Thế Hào</p>
                        <p>Phó Tổng biên tập: Đinh Văn Tịnh</p>
                        <p>Thư ký tòa soạn: Lê Công Lý</p>
                        <p>Giấy phép hoạt động Tạp chí điện tử số 535/GP-BTTTT ngày 21/08/2021 của Bộ Thông tin & Truyền thông.</p>
                        <p>Địa chỉ: Phòng 1102 tầng 11 Tòa nhà Sở giao dịch I - Ngân hàng Phát triển Việt Nam (VDB) - Số 185A Giảng Võ, phường Cát Linh, quận Đống Đa, TP. Hà Nội.</p>
                        <p>Email: toasoan@markettimes.vn</p>
                        <p>Văn phòng Tòa soạn: Tầng 2, Tòa nhà Kim Ánh, Số 1, Ngõ 78, Duy Tân, Cầu Giấy, Hà Nội</p>
                        <p>Tel: 035.289.5335</p>
                        <br />
                        <p>© 2021 Toàn bộ bản quyền thuộc Nhịp sống thị trường - Markettimes</p>

                    </div>
                </div>

            </div>
            <div className='bg-white text-[11px] py-2 '>
                <div className='container'>
                    <div className=" text-[#666] flex items-center gap-1  justify-center lg:justify-end ">
                        POWERED BY{" "}
                        <a
                            target="_blank"
                            href="#"
                            className='font-bold text-[#666]'
                        >
                            <span className="text-[#14468f] font-bold">ONE</span>CMS
                        </a>
                        - A PRODUCT OF{" "}
                        <span className="text-[#14468f] font-bold">NEKO</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
