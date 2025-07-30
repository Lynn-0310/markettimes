import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Image from 'next/image'
import LoadMoreButton from '@/components/LoadMoreButton'

export default function tieuDiem() {

    const article1 = [
        {
            image: "/p1_home.jpg",
            name: "Thủ tướng yêu cầu về đích sớm 3 dự án cao tốc, sân bay, cảng biển tại Quảng Trị",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
            desc: "Chiều ngày 26/7, trong chương trình công tác tại tỉnh Quảng Trị, Thủ tướng Phạm Minh Chính đã đi kiểm tra tiến độ dự án đường cao tốc Vạn Ninh – Cam Lộ, dự án cảng hàng không Quảng Trị, dự án cảng biển.",
            highlight1: [
                "Từ sân bay Quảng Trị đến tham vọng đưa hàng không Việt Nam 'cất cánh' của bầu Hiển"
            ],
            highlight2: [
                "Huy động 656 máy móc, trên 1.500 nhân công 'tăng tốc' thi công cao tốc Vạn Ninh - Cam Lộ, phần đầu hoàn thành"
            ],
        },
        {
            image: "/p1_home.jpg",
            name: "Cần chính sách ưu đãi phát triển “nhà ở thương mại vừa túi tiền” ",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',

        }, {
            image: "/p1_home.jpg",
            name: "Thêm một chìa khóa giải “cơn khát” điện cho các trung tâm dữ liệu AI: Giải pháp tới từ những cục pin xe điện tưởng như là rác khó xử lý ",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',

        }, {
            image: "/p2_home.jpg",
            name: "VietinBank Capital không còn là cổ đông lớn tại Petrosetco sau nửa năm ",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Tài chính",
            desc: "TVietinBank Capital đã bán ra 7,8 triệu cổ phiếu PET trong phiên 23/7, qua đó giảm sở hữu xuống còn 2,2 triệu cổ phiếu (tỷ lệ 2,06%) đồng thời không còn là cổ đông lớn của Petrosetco."
        },
        {
            image: "/p2_home.jpg",
            name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Kinh doanh",
            desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
        }, {
            image: "/p2_home.jpg",
            name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Kinh doanh",
            desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
        }, {
            image: "/p2_home.jpg",
            name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững? ",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri', tag: "Kinh doanh",
            desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại."
        }
    ]

    const topNews = [
        {
            id: 1,
            title:
                "Mua hàng tỷ mét khối khí đốt Nga với giá hời nhất châu Âu, quốc gia ủng hộ EU cương quyết không áp lệnh trừng phạt Moscow bất chấp sức ép từ phương Tây",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
        },
        {
            id: 2,
            title:
                "Bác yêu cầu của phía Ukraine, quốc gia EU bất ngờ dỡ lệnh đóng băng hơn 400 triệu USD tài sản của 'ông lớn' khí đốt Nga",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
        },
        {
            id: 3,
            title:
                "GELEX lãi kỷ lục trong quý 2, lợi nhuận kinh doanh lõi tăng gần 3 lần cùng kỳ",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
        },
        {
            id: 4,
            title:
                "Danh sách cổ đông nhận bổ thưởng ROS giá 5.466 - 7.215 đồng/cp, người nhận nhất 180 tỷ, có cả công ty chứng khoán",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
        },
        {
            id: 5,
            title:
                "Danh sách cổ đông nhận bổ thưởng ROS giá 5.466 - 7.215 đồng/cp, người nhận nhất 180 tỷ, có cả công ty chứng khoán",
            slug: 'bai-viet/thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri',
        },
    ]

    return (
        <div>
            <Header />

            <div className='lg:pb-[50px] lg:pt-[20px] md:pb-[35px] md:pt-[135px] pb-[20px] pt-[120px]'>
                <div className='container'>
                    <div className='flex flex-col lg:pb-[5px] lg:border-b  lg:border-[rgba(0,0,0,0.05)] lg:mb-5 mb-2.5 py-[15px]'>
                        <h1 className='font-bold text-[26px] text-[#AE3034] leading-1.3'>Tiêu điểm</h1>
                        <h3 className='py-2.5 text-[#aaa]'>Cải chính</h3>
                    </div>

                    <div className='flex gap-5 lg:flex-row flex-col '>
                        <div className='flex gap-8 flex-col lg:border-b lg:border-r lg:border-[rgba(0,0,0,0.05)] lg:w-[70%] w-full'>
                            <div className='flex lg:flex-row flex-col gap-5 w-full lg:pb-4 lg:border-b  lg:border-[rgba(0,0,0,0.05)] '>
                                <div className='lg:border-r lg:border-[rgba(0,0,0,0.05)] lg:pr-4.5 lg:w-[65%] w-full lg:border-b-0 border-b border-[rgba(0,0,0,0.05)] pb-5'>
                                    <a href={article1[0].slug} className="flex flex-col gap-5 ">
                                        <div className="w-full relative aspect-[240/160]">
                                            <Image
                                                src={article1[0].image}
                                                alt={article1[0].name}
                                                className="object-cover !h-auto"
                                                fill
                                                quality={100}
                                                sizes="100vw"
                                            />
                                        </div>

                                        <div className="w-full flex flex-col gap-2.5">
                                            <h3 className="text-black text-[20px] lg:text-[18px] md:text-[22px] font-bold">
                                                {article1[0]?.name}
                                            </h3>
                                            <p className="text-[#797A7E] text-[15px]">
                                                {article1[0]?.desc}
                                            </p>

                                            <ul className="list-disc pl-5 text-[#aaa]">
                                                {article1[0]?.highlight1?.map((hl, i) => (
                                                    <li key={`hl1-${i}`}>{hl}</li>
                                                ))}
                                                {article1[0]?.highlight2?.map((hl, i) => (
                                                    <li key={`hl2-${i}`}>{hl}</li>
                                                ))}
                                            </ul>
                                        </div>

                                    </a>
                                </div>
                                <div className="flex lg:flex-col lg:gap-1.5 gap-6 lg:w-[35%] w-full">
                                    {article1.slice(1, 3).map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.slug}
                                            className={`lg:p-4.5 border-b border-[rgba(0,0,0,0.05)] pb-4.5 w-[50%] lg:w-full lg:last:border-none  ${index === 0 ? 'lg:pt-0' : ''} ${index === 0 || index === 1 ? 'lg:pl-0' : ''} `}>

                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={200}
                                                height={120}
                                                className=" lg:h-[100px] h-[240px] object-cover w-full"
                                            />
                                            <h3 className="text-sm font-semibold mt-2">{item.name}</h3>
                                        </a>
                                    ))}
                                </div>

                            </div>

                            <div className="w-[100%] flex flex-col gap-4.5 pb-[15px] mb-[15px] pr-[15px] lg:pr-[15px] lg:m-0 ">
                                {article1.slice(3).map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.slug}
                                        className="flex gap-5 border-b border-[rgba(0,0,0,0.05)] pb-7 pt-3">
                                        <div className="w-[40%] relative aspect-[240/160]">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                className="object-cover !h-auto"
                                                fill
                                                quality={100}
                                                sizes="100vw"
                                            />
                                        </div>


                                        <div className="w-[60%] flex flex-col gap-2.5">
                                            <h3 className=" text-black text-[16px] lg:text-[15px] md:text-[18px] font-bold">
                                                {item.name}
                                            </h3>
                                            <h4 className="text-[#555] text-[13px]">{item.tag}</h4>
                                            <p className="text-[#797A7E] text-[13px] ">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Load More Button */}
                            <LoadMoreButton/>

                        </div>

                        {/* đọc nhiều */}

                        <div className=" flex flex-col gap-5  lg:w-[30%] w-full border-b border-[rgba(0,0,0,0.05)] pb-4 self-start">
                            <div className="relative text-black before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:left-0 after:right-0 lg:before:w-[10%] lg:after:w-[50%] md:before:w-[3%] md:after:w-[80%] sm:before:w-[5%] sm:after:w-[75%] before:w-[8%] after:w-[45%] before:h-[4px] after:h-[4px] before:bg-red-700 after:bg-red-700 before:translate-y-[-50%] after:translate-y-[-50%]">
                                <a ><div className="pr-9 pl-11 text-[18px] font-black leading-1.4">Đọc nhiều</div></a>
                            </div>
                            <div className="">
                                <ul className="space-y-3 mt-2 ">
                                    {topNews.map((item) => (
                                        <li key={item.id} className="flex items-start gap-2 border-b border-[rgba(0,0,0,0.05)] pb-7 last:border-none">
                                            <span className="text-[15px] font-black text-[#D8D3CD] min-w-[20px]">
                                                {item.id}.
                                            </span>
                                            <p className="text-[15px] text-black font-bold leading-snug">{item.title}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>






            <Footer />
        </div>
    )
}
