import React, { useState } from 'react';
import styles from '../styles/Item.module.css';

const Item = () => {
    const [image, setImage] = useState(null);
    const [inverseColor, setInverseColor] = useState('#000000');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
                    let r = 0, g = 0, b = 0;
                    for (let i = 0; i < imageData.length; i += 4) {
                        r += imageData[i];
                        g += imageData[i + 1];
                        b += imageData[i + 2];
                    }
                    r = Math.floor(r / (imageData.length / 4));
                    g = Math.floor(g / (imageData.length / 4));
                    b = Math.floor(b / (imageData.length / 4));
                    const inverse = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
                    setInverseColor(inverse);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
    };

    return (
        <div
            className={styles.item}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => !image && document.getElementById(`imageUpload-${styles.item}`).click()}
        >
            {image && (
                <span
                    className={styles.removeImage}
                    style={{ color: inverseColor }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage();
                    }}
                >
                    &times;
                </span>
            )}
            <input
                type="file"
                id={`imageUpload-${styles.item}`}
                className={styles.imageUploadInput}
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default Item;