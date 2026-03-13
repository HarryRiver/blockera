import Image from 'next/image';
import styles from './News.module.css';
import { FiChevronRight } from 'react-icons/fi';

export default function NewsPage() {
    return (
        <main className={styles.newsContainer}>
            <article className={`container ${styles.articleWrapper}`}>
                <div className={styles.breadcrumb}>
                    SỰ KIỆN <FiChevronRight /> VĂN HÓA
                </div>
                
                <h1 className={styles.title}>Xây dựng văn hóa công sở trong kỷ nguyên mới</h1>
                
                <div className={styles.meta}>
                    Đăng Chung | 12/08/2023 17:03 (GMT+7)
                </div>

                <div className={styles.subtitle}>
                    GD&TĐ - Hội nhập và chuyển đổi số toàn cầu, văn hóa công sở trở thành 'bộ mặt' sống động, định hình thương hiệu của mỗi cơ quan, đơn vị.
                </div>

                <div className={styles.content}>
                    <figure className={styles.imageFigure}>
                        <Image 
                            src="/images/hellen-1.png" 
                            alt="Toàn cảnh buổi tập huấn"
                            width={800}
                            height={450}
                            className={styles.articleImage}
                        />
                        <figcaption className={styles.imageCaption}>
                            Toàn cảnh buổi tập huấn "Văn hóa công sở trong kỷ nguyên mới" tại Sở Dân tộc và Tôn giáo TP Hà Nội.
                        </figcaption>
                    </figure>

                    <h3>Nghệ thuật kiến tạo niềm tin</h3>
                    
                    <p>
                        Buổi tập huấn "Văn hóa công sở trong kỷ nguyên mới" do Sở Dân tộc và Tôn giáo TP Hà Nội tổ chức mới đây chính là minh chứng rõ nét cho sự chuyển mình mạnh mẽ này, đánh dấu bước tiến từ nhận thức đến hành động. Vượt lên khái niệm truyền thống, văn hóa công sở trong kỷ nguyên mới được nhìn nhận là nghệ thuật kiến tạo giá trị bắt nguồn từ những điều tưởng chừng nhỏ nhất.
                    </p>

                    <p>
                        Bà Đinh Thị Thanh Thủy (Ms Thủy Anh) - Phó Viện trưởng Viện Nghiên cứu, Đào tạo và Phát triển Thương hiệu Việt Nam (Hiệp hội Thiết kế mẫu và Sáng tạo Mỹ thuật Việt Nam), diễn giả của buổi tập huấn chia sẻ: "Mỗi cán bộ, công chức, viên chức giờ đây phải mang trong mình sứ mệnh của một 'sứ giả văn hóa' - người truyền tải tinh thần, bản sắc và uy tín của cơ quan, tổ chức, thông qua từng cử chỉ, thái độ và lời nói. Văn hóa công sở được định hình không chỉ bằng kỹ năng, mà bằng chính thái độ và khí chất của người thực thi công việc".
                    </p>

                    <p>
                        Vì vậy, tại buổi tập huấn chúng tôi đã tập trung làm rõ bốn trụ cột then chốt. Trước hết là việc định vị hình ảnh người đại diện, nhấn mạnh sứ mệnh lan tỏa hình ảnh tích cực của Sở Dân tộc và Tôn giáo TP Hà Nội qua tư duy và hành vi ứng xử chuẩn mực.
                    </p>

                    <p>
                        Tiếp đến là sự chuẩn hóa toàn diện về diện mạo và tác phong, nơi từng chi tiết như trang phục, dáng đi, nghi thức trong giao tiếp như bắt tay, chào hỏi, hay đơn giản là từng cử chỉ cơ thể, từng ánh mắt đều phải là biểu hiện của sự tôn trọng và tinh thần, tác phong làm việc, phong thái chuyên nghiệp trước công chúng.
                    </p>

                    <p>
                        Không chỉ dừng lại ở hình thức, nghệ thuật sử dụng ngôn từ khi giao tiếp với đồng nghiệp, với nhân dân phải được nâng tầm, bao gồm kỹ thuật thuyết trình thu hút, cách sử dụng ngôn ngữ khéo léo với sự nhấn nhá trọng âm, cách ngắt nghỉ và ứng dụng linh hoạt, nhằm truyền đạt chính sách một cách rõ ràng, thuyết phục, dễ lan tỏa.
                    </p>

                    <figure className={styles.imageFigure}>
                        <Image 
                            src="/images/hellen-4.JPG" 
                            alt="Diễn giả Thủy Anh"
                            width={800}
                            height={500}
                            className={styles.articleImage}
                            style={{ objectFit: 'cover' }}
                        />
                        <figcaption className={styles.imageCaption}>
                            Diễn giả Thủy Anh chia sẻ về chuẩn hóa hình ảnh, tác phong, nghi thức giao tiếp.
                        </figcaption>
                    </figure>

                    <p>
                        Cuối cùng, kỹ năng giao tiếp đa chiều được trang bị để xử lý tinh tế mọi tình huống với đồng nghiệp, với cộng đồng, từ nghệ thuật lắng nghe, thấu cảm, cách phản hồi đến việc từ chối khéo léo... tất cả các yếu tố đó góp phần việc xây dựng văn hóa đơn vị tinh tế, gắn kết, đồng thuận".
                    </p>

                    <h3>Hành trình chuyển mình của 'người công vụ'</h3>

                    <p>
                        Ông Nguyễn Sỹ Trường - Giám đốc Sở Dân tộc và Tôn giáo TP Hà Nội, cho rằng: "Văn hóa công sở bắt đầu từ những điều nhỏ nhất nhưng tác động lớn nhất tới niềm tin của nhân dân. Mỗi lời chào, mỗi cử chỉ chuẩn mực chính là một viên gạch vững chắc xây dựng thương hiệu tập thể. Trong kỷ nguyên mới, nơi công chức là 'bộ mặt' của chính quyền, thì sự chuyên nghiệp và tận tâm không còn là lựa chọn, mà là yêu cầu tất yếu".
                    </p>

                    <figure className={styles.imageFigure}>
                        <Image 
                            src="/images/hellen-2.png" 
                            alt="Đại biểu chia sẻ tại buổi tập huấn"
                            width={800}
                            height={500}
                            className={styles.articleImage}
                        />
                        <figcaption className={styles.imageCaption}>
                            Đại biểu chia sẻ tại buổi tập huấn.
                        </figcaption>
                    </figure>

                    <p>
                        Theo ông Nguyễn Sỹ Trường, điểm cốt lõi của buổi tập huấn nằm ở sự chuyển hóa tư duy phục vụ. Cán bộ không đơn thuần "làm hành chính" theo nhiệm vụ được giao, mà phải hướng đến tinh thần 'phụng sự - kiến tạo giá trị' thiết thực cho cộng đồng. Sự thay đổi căn bản này xuất phát từ nhận thức rằng văn hóa công sở chính là thái độ sống, là cốt cách của người thực thi công vụ, chứ không chỉ dừng lại ở những kỹ năng nghề nghiệp đơn thuần.
                    </p>

                    <p>
                        Việc xây dựng văn hóa nội bộ bền vững thông qua chuẩn hóa giao tiếp, tạo dựng môi trường làm việc tôn trọng và hỗ trợ lẫn nhau là nền tảng cho sự phát triển. Mục tiêu cao nhất là lan tỏa hình ảnh 'Bản lĩnh - Trọng dân - Ân cần - Trách nhiệm', biến mỗi cuộc tiếp xúc, mỗi thủ tục hành chính thành cơ hội kết nối, phục vụ và trao gửi niềm tin tới nhân dân.
                    </p>

                    <div className={styles.quote}>
                        'Một nụ cười chân thành, một ánh mắt thấu hiểu hay cách lắng nghe cẩn trọng cũng quan trọng không kém nội dung công vụ. Chính những điều tưởng chừng giản dị ấy lại góp phần quan trọng để người dân thêm tin tưởng và gắn bó với chính quyền', ông Nguyễn Sỹ Trường nói.
                    </div>
                </div>
            </article>
        </main>
    );
}
