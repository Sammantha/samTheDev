/* eslint-disable @next/next/no-img-element */
'use client'
import * as React from 'react';
import Carousel from 'better-react-carousel';

type ImageProps = {
    id: number,
    src: string,
    alt: string,
    width?: number,
    height?: number,
}

type ImageCarouselProps = {
    data: ImageProps[],
}

export default function ImageCarousel(props: ImageCarouselProps) {
    const data = props.data;

    return (
        <Carousel cols={4} rows={1} gap={10} loop>
            {/* <Carousel.Item>
                <img src={'http://localhost:3000/public/images/art/1.jpg'} width={'100%'} />
            </Carousel.Item> */}

            {data && data?.map((image: ImageProps) => {
                return (
                    <Carousel.Item key={`art_${image.id}`}>
                        <img
                            src={image.src}
                            // alt={image.alt}
                            width="100%" />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}
