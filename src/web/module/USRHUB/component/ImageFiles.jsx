import React, { useState } from 'react';
import "../styles/ImageFiles.css";

    // const images = [
    //     { id: 1, src: require("../images/109IMG_4559.JPG") },
    //     { id: 2, src: require("../images/109IMG_4637.JPG") },
    //     { id: 3, src: require("../images/109IMG_4699.JPG") },
    //     { id: 1, src: require("../images/109IMG_4712.JPG") },
    //     { id: 2, src: require("../images/109IMG_4755.JPG") },
    //     { id: 3, src: require("../images/109IMG_4936.JPG") },
    //     { id: 1, src: require("../images/109IMG_4962.JPG") },
    //     { id: 2, src: require("../images/109IMG_5041.JPG") },
    //     { id: 3, src: require("../images/109IMG_5695.JPG") },
    //     { id: 3, src: require("../images/109IMG_6311.JPG") },
    //   ]; 

export default function ImageFiles(props) {
    const { images } = props;

    const ImageGallery = () => {
        const [selectedImage, setSelectedImage] = useState(null);

        const handleImageClick = (image) => {
            if (selectedImage === image) {
                setSelectedImage(null);
            } else {
                setSelectedImage(image);
            }
        };

        // 如果 images 未定义或者不是数组，显示一个默认提示或者加载状态
        if (!Array.isArray(images)) {
            return <div>Loading...</div>
        }

        return (
            <>
            <div className="if">相關圖片</div>
                <div className="image-gallery">
                    {/* <p style={{ margin: "0%" }} className='fi'>相關圖片<br></br></p> */}
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`image-container-if ${selectedImage === image ? "selected" : ""}`}
                            onClick={() => handleImageClick(image)}
                        >
                            <img key={index} src={image.src} alt={`image_${image.id}`} />
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return <ImageGallery />;
}
