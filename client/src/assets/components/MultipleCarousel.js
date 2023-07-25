import React from 'react';
import { Carousel } from 'react-bootstrap';
import Wrapper from '../wrappers/Menu';
const MultipleCarousel = ({ img1,img2,img3,img4,img5,img6,img7,img8 ,img9,img10}) => {
    return (
        <Wrapper>
            <Carousel controls={false} className="carousel-dark">
                {img1 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img1}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img2 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img2}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img3 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img3}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img4 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img4}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img5 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img5}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img6 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img6}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img7 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img7}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img8 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img8}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img9 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img9}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
                {img10 &&
                    <Carousel.Item >
                        <div className="d-flex justify-content-center align-items-center item">
                            <div className='img-container'>
                                <img
                                    className=""
                                    src={img10}
                                    alt=""
                                />
                            </div>
                        </div>
                        <Carousel.Caption>
                            {/*context here  */}
                        </Carousel.Caption>
                    </Carousel.Item>
                }
            </Carousel>
        </Wrapper>
    );
}

export default MultipleCarousel;
