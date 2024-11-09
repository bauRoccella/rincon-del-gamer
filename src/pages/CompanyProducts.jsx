import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import PieChart from '../components/PieChart'; 
import Slider from 'react-slick'; 
import ProductCard from '../components/ProductCard'; 
import styles from '../styles/CompanyProducts.module.css';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#4b0082', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#4b0082', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
};

const CompanyProducts = () => {
    const [selectedProducts, setSelectedProducts] = useState([]); // Estado para productos seleccionados

    const productList = [
        {
            name: 'Ratchet Clank',
            image: '/path/to/image1.jpg',
            sales: 100,
            views: 2000,
            conversionRate: 5,
            wishlists: 500,
            isPublished: false
        },
        {
            name: 'Another Game',
            image: '/path/to/image2.jpg',
            sales: 80,
            views: 1500,
            conversionRate: 7,
            wishlists: 400,
            isPublished: true
        },
        // Agrega más productos si es necesario
    ];

    const handleSelectProduct = (product) => {
        setSelectedProducts((prevSelected) => {
            if (prevSelected.includes(product)) {
                return prevSelected.filter((p) => p !== product); // Deseleccionar
            } else if (prevSelected.length < 5) {
                return [...prevSelected, product]; // Seleccionar hasta 5 productos
            } else {
                alert('Solo puedes seleccionar hasta 5 productos.');
                return prevSelected;
            }
        });
    };

    // Datos dinámicos basados en productos seleccionados
    const chartData = {
        compras: {
            dataValues: selectedProducts.map((p) => p.sales),
            labels: selectedProducts.map((p) => p.name)
        },
        visualizaciones: {
            dataValues: selectedProducts.map((p) => p.views),
            labels: selectedProducts.map((p) => p.name)
        },
        wishlists: {
            dataValues: selectedProducts.map((p) => p.wishlists),
            labels: selectedProducts.map((p) => p.name)
        },
        conversion: {
            dataValues: selectedProducts.map((p) => p.conversionRate),
            labels: selectedProducts.map((p) => p.name)
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true
    };

    return (
        <div className={styles.contentContainer}>
            <h1>Productos de la Empresa</h1>
            <div className={`${styles.carouselContainer} custom-carousel`}>
                <Slider {...settings}>
                    {Object.keys(chartData).map((key, index) => (
                        <div key={index} className={styles.chartSlide}>
                            <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                            <div className={styles.chartSection}>
                                {chartData[key].dataValues.length > 0 ? (
                                    <PieChart dataValues={chartData[key].dataValues} labels={chartData[key].labels} />
                                ) : (
                                    <p>No hay datos seleccionados</p>
                                )}
                                <div className={styles.chartInfo}>
                                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                    <ul>
                                        {chartData[key].labels.map((label, idx) => (
                                            <li key={idx}>
                                                {label} ({chartData[key].dataValues[idx]})
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={styles.addButtonContainer}>
                <button className={styles.addGameButton}>Agregar Juego</button>
            </div>
            <div className={styles.productsContainer}>
                {productList.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        isSelected={selectedProducts.includes(product)}
                        onSelect={() => handleSelectProduct(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompanyProducts;
