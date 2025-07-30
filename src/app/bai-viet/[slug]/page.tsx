// app/bai-viet/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import LoadMoreButton from '@/components/LoadMoreButton';

const allArticles = [
    {
        name: "Thủ tướng yêu cầu về đích sớm 3 dự án cao tốc, sân bay, cảng biển tại Quảng Trị",
        slug: "thu-tuong-yeu-cau-ve-dich-som-3-du-an-cao-toc-san-bay-cang-bien-tai-quang-tri",
        image: "/p1_home.jpg",
        desc: "Chiều ngày 26/7, trong chương trình công tác tại tỉnh Quảng Trị, Thủ tướng Phạm Minh Chính...",
        author: "PV",
        menuSlug: "kinh tế",
        time: "20:42 20/07/2025",
        content: `
        ## Hội Thẩm định giá Việt Nam đã tổ chức tổng kết lớp cập nhật kiến thức nghiệp vụ thẩm định giá CNKT2025.12. Chủ tịch Hội Nguyễn Tiến Thỏa đánh giá cao tinh thần học tập của các thẩm định viên và sự đóng góp của đội ngũ giảng viên trong việc truyền đạt nội dung theo đúng quy định của Bộ Tài chính.

        **Toàn cảnh Lễ tổng kết lớp cập nhật kiến thức thẩm định giá CNKT2025.12**

        Chiều 20/7/2025, tại TP Hà Nội, Hội Thẩm định giá Việt Nam đã tổ chức tổng kết lớp Cập nhật kiến thức nghiệp vụ thẩm định giá CNKT2025.12 dành cho các thẩm định viên về giá. Đây là hoạt động thường kỳ, góp phần nâng cao năng lực chuyên môn, cập nhật những quy định mới theo yêu cầu của Bộ Tài chính đối với đội ngũ hành nghề thẩm định giá.

        Phát biểu tại buổi tổng kết, ông Nguyễn Tiến Thỏa – Chủ tịch Hội Thẩm định giá Việt Nam, nguyên Cục trưởng Cục Quản lý giá (Bộ Tài chính) – đã ghi nhận và đánh giá cao tinh thần học tập nghiêm túc của học viên cũng như sự nhiệt tình, trách nhiệm của các giảng viên. Ông cho biết, toàn bộ nội dung cập nhật đã bám sát quy định hiện hành, giúp các thẩm định viên củng cố kiến thức và nâng cao kỹ năng nghề nghiệp trong bối cảnh thị trường liên tục biến động.

        ![Hình ảnh lễ tổng kết](https://via.placeholder.com/600x400?text=Ceremony+Image)

        Các học viên được cấp Giấy xác nhận hoàn thành khóa cập nhật kiến thức nghiệp vụ thẩm định giá.

        Nhân dịp này, Chủ tịch Hội đã chúc mừng các thẩm định viên lớp CNKT2025.12 đã hoàn thành chương trình học và được cấp Giấy xác nhận hoàn thành khóa cập nhật kiến thức nghiệp vụ thẩm định giá năm 2025 – một điều kiện cần thiết để duy trì chứng chỉ hành nghề theo quy định pháp luật.

        ### Bài liên quan
        - [Tổng kết lớp cập nhật kiến thức thẩm định giá CNKT2025.12 tại Hà Nội](#)`,
    },
    {
        name: "Đến thời tiền số thổi giá chứng khoán: Các doanh nghiệp đua nhau mua ‘coin’ để nâng giá cổ phiếu, liệu có bền vững111?",
        author: "PV",
        time: "20:42 20/07/2025",
        menuSlug: "kinh tế",
        slug: "den-thoi-tien-so-thoi-gia-chung-khoan-cac-doanh-nghiep-dua-nhau-mua-coin-de-nang-gia-co-phieu-lieu-co-ben-vung111",
        image: "/p2_home.jpg",
        desc: "Trước bài học của MicroStrategy và CEO Michael Saylor, nhiều công ty đang gặp khó khăn cũng học hỏi mua vào tiền số để mong đổi đời, nâng giá cổ phiếu trở lại.",
        content: `
        ## Hội Thẩm định giá Việt Nam đã tổ chức tổng kết lớp cập nhật kiến thức nghiệp vụ thẩm định giá CNKT2025.12. Chủ tịch Hội Nguyễn Tiến Thỏa đánh giá cao tinh thần học tập của các thẩm định viên và sự đóng góp của đội ngũ giảng viên trong việc truyền đạt nội dung theo đúng quy định của Bộ Tài chính.

        **Toàn cảnh Lễ tổng kết lớp cập nhật kiến thức thẩm định giá CNKT2025.12**

        Chiều 20/7/2025, tại TP Hà Nội, Hội Thẩm định giá Việt Nam đã tổ chức tổng kết lớp Cập nhật kiến thức nghiệp vụ thẩm định giá CNKT2025.12 dành cho các thẩm định viên về giá. Đây là hoạt động thường kỳ, góp phần nâng cao năng lực chuyên môn, cập nhật những quy định mới theo yêu cầu của Bộ Tài chính đối với đội ngũ hành nghề thẩm định giá.

        Phát biểu tại buổi tổng kết, ông Nguyễn Tiến Thỏa – Chủ tịch Hội Thẩm định giá Việt Nam, nguyên Cục trưởng Cục Quản lý giá (Bộ Tài chính) – đã ghi nhận và đánh giá cao tinh thần học tập nghiêm túc của học viên cũng như sự nhiệt tình, trách nhiệm của các giảng viên. Ông cho biết, toàn bộ nội dung cập nhật đã bám sát quy định hiện hành, giúp các thẩm định viên củng cố kiến thức và nâng cao kỹ năng nghề nghiệp trong bối cảnh thị trường liên tục biến động.

        ![Hình ảnh lễ tổng kết](https://via.placeholder.com/600x400?text=Ceremony+Image)

        Các học viên được cấp Giấy xác nhận hoàn thành khóa cập nhật kiến thức nghiệp vụ thẩm định giá.

        Nhân dịp này, Chủ tịch Hội đã chúc mừng các thẩm định viên lớp CNKT2025.12 đã hoàn thành chương trình học và được cấp Giấy xác nhận hoàn thành khóa cập nhật kiến thức nghiệp vụ thẩm định giá năm 2025 – một điều kiện cần thiết để duy trì chứng chỉ hành nghề theo quy định pháp luật.

        ### Bài liên quan
        - [Tổng kết lớp cập nhật kiến thức thẩm định giá CNKT2025.12 tại Hà Nội](#)`,
    }

];

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


interface Props {
    params: Promise<{
        slug: string;
    }>;
}
export default async function BaiVietPage({ params }: Props) {

    const { slug } = await params;
    const article = allArticles.find((a) => a.slug === slug);


    if (!article) return notFound();

    return (
        <>
            <Header />
            <div className=' bg-white md:pb-[35px] md:pt-[95px] pb-[20px] pt-[70px] lg:pt-0'>
                <div className="container py-10 !mt-[30px]">
                    <div className='lg:w-[60%] w-full pt-7 pl-[45px]'>

                        <div className="flex gap-1 pb-4.5 text-gray-500">
                            <p>Trang chủ</p>
                            <p>/</p>
                            <p>{article.menuSlug}</p>
                        </div>

                        <h1 className="text-3xl font-bold mb-4 text-[#503D1F]">{article.name}</h1>
                        <div className='pb-20'>
                            <div className=" mb-6">
                                <span className='text-[rgba(80, 61, 31, 0.6)] font-medium'>{article.author}</span> | <span>{article.time}</span>
                            </div>
                            <p className='lg:text-[19px] text-[18px] font-bold'>{article.desc}</p>
                        </div>

                        <div>
                            <Image
                                src={article.image}
                                alt={article.name}
                                width={700}
                                height={400}
                                className="w-full max-w-[700px] mb-5 object-cover"
                            />
                            <p className="text-base text-[#555] mb-4">{article.content}</p>
                        </div>

                        <div className="mb-4 border-b pb-[80px] border-[rgba(0, 0, 0, 0.05)]">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Thích</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Chia sẻ</button>
                        </div>

                        {/* Comment Input */}
                        <div className="mb-8 pt-6">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Vui lòng nhập tiếng Việt có dấu"
                                rows={3}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mb-4">
                            <button className="bg-[#357982] text-white px-4 py-2 rounded">Gửi bình luận</button>
                        </div>

                        {/* Existing Comments */}
                        <div className=" flex justify-between items-center mb-4 pb-[80px] ">
                            <p className='#AE3034'>(0) Bình luận</p>
                            <div className='flex gap-3 items-center '>
                                <p className='text-[#503D1F]'>Xếp theo: </p>
                                <p className='text-gray-500'>Thời gian </p>
                                <p>|</p>
                                <p className='text-[#AE3034]'> Số người thích</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>


            <div className='container'>
                <div className='flex flex-col lg:pb-[5px] lg:mb-5 mb-2.5 py-[15px]'>
                    <h1 className='font-black text-[19px]  leading-1.3'>Tin liên quan</h1>
                </div>
                <div className='pb-5 lg:border-b lg:border-[rgba(0,0,0,0.05)] lg:pb-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 '>
                        {article1.slice(0, 4).map((item, index) => (
                            <a
                                key={index}
                                href={item.slug}
                                className=" flex flex-col gap-2.5">

                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={0}
                                    height={120}
                                    className=" lg:h-[100px] h-[240px] object-cover w-full"
                                />
                                <h3 className="text-sm font-semibold">{item.name}</h3>

                            </a>
                        ))}
                    </div>
                </div>

            </div>



            <div className='container !mb-[40px]'>

                <div className='flex flex-col lg:pb-[5px] lg:mb-5 mb-2.5 py-[15px]'>
                    <h1 className='font-black text-[19px]  leading-1.3'>Có thể bạn quan tâm</h1>
                </div>
                <div className='flex gap-5 lg:flex-row flex-col '>
                    <div className='flex gap-8 flex-col lg:border-b lg:border-r lg:border-[rgba(0,0,0,0.05)] lg:w-[70%] w-full'>
                        <div className='flex lg:flex-row flex-col gap-5 w-full lg:pb-4 '>
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

                    </div>

                    <div className='lg:w-[30%] pb-5 lg:border-b lg:border-[rgba(0,0,0,0.05)] lg:pb-4'>
                        <div className='flex flex-col gap-5 '>
                            {article1.slice(0, 4).map((item, index) => (
                                <a
                                    key={index}
                                    href={item.slug}
                                    className=" flex gap-2.5">

                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={0}
                                        height={0}
                                        className=" lg:h-[100px] h-auto object-cover lg:w-full w-[50%]"
                                    />
                                    <h3 className="text-sm font-semibold lg:w-full w-[50%]">{item.name}</h3>

                                </a>
                            ))}
                        </div>
                    </div>



                </div>
            </div>


            <div className='container !mb-[40px]'>
                <div className='flex gap-5 lg:flex-row flex-col '>
                    <div className='flex gap-8 flex-col lg:border-b lg:border-r lg:border-[rgba(0,0,0,0.05)] lg:w-[70%] w-full'>
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
                        <LoadMoreButton />
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

            <Footer />
        </>
    );
}
