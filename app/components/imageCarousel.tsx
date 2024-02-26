'use client'
import * as React from 'react';
import Carousel from 'better-react-carousel';
import Image from 'next/image';
import { config } from '../../config.js';
import passport from 'passport';
import { Strategy as GoogleOAuthStrategy } from 'passport-google-oauth20';
import { use } from 'react';

type ImageCarouselProps = {
    props: {
        images: ImageProps[]
    }
};

type ImageProps = {
    alt: string,
    id: number,
    src: string,
    width?: number,
    height?: number,
}

let tkn = '';

const fetcher = async (): Promise<ImageCarouselProps> => {
    console.log('fetcher');
    // POST https://photoslibrary.googleapis.com/v1/mediaItems:search
    // Content-type: application/json
    // Authorization: Bearer oauth2-token
    // {
    //   "pageSize": "100",
    //   "albumId": "album-id"
    // }

    passport.use(new GoogleOAuthStrategy(
        {
            clientID: config.oAuthClientID,
            clientSecret: config.oAuthclientSecret,
            callbackURL: config.oAuthCallbackUrl
        },
        function (accessToken) {
            // cb(accessToken)
            tkn = accessToken
            console.log('accessToken', accessToken);
        }
    ));

    console.log('tkn', tkn);

    return await getPhotos(tkn);
}

export const getPhotos = (token: string): Promise<ImageCarouselProps> => {
    console.log('getPhotos');
    return fetch(
        'https://photoslibrary.googleapis.com/v1/mediaItems:search',
        {
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
            body: JSON.stringify({
                albumId: "AKs2AivPBOUxYTedFnEWWfbrFxqWh-iqcB25GazcoxQNMYOqL88k0W0CAkJFjPn6OaBAEOX8JbaR",
                pageSize: "100"
            }),
            method: 'POST',
        })
        .then((res) => {
            // {
            //     "mediaItems": [
            //       ...
            //     ],
            //     "nextPageToken": "token-for-pagination"
            // }
            console.log('goodleApiResponse: ', res);
            console.log('res.json', res.json)
            console.log('res.body', res.body)
            return {
                props: {
                    images: [{
                        id: 1,
                        alt: 'art made by Sam',
                        src: 'https://photos.app.goo.gl/5UvsgDG2d6tLcd5F7',
                        width: 300,
                        height: 300
                    }]
                }
            };
        })
}

// export const getStaticProps = async (): Promise<ImageCarouselProps> => {
//     const images: ImageProps[] = [];
//     const googleApiResult = {
//         mediaItems: [{
//             id: 1,
//             baseUrl: "https://lh3.googleusercontent.com/lr/AJUiC1y5utKXX0GsQihfyTPONIL58RwwF9WfzgFsiCDE5agFkwjjBYtfhPZdnPBZfVTb3c1EJFH971aLateLM7ZnZC4m4UaMDcF1x_8gf7ihArWrcH9OfraTqhS5wv4SUikB01kGUvpo2LXe96h1IJFW3u-ZP9TpIZSY6KyX7feFotkK2w4TQ9iZVY3H-FNpncm67FMYyMwCrTbJnZWr3nfbULld9ggPPUKAkXxYzlW20iKcQUIVShhFiBoylwts5f-Oya2YXEvVPjCT0HPTOguhhQCn1qDvo0097zy-SjoIjUZUB7-O-_LTRrxvy6dlmABSXOp9qjgbamTvgsMa4kmMmgxlR6LPYd2C3MrZXyRZfxz1WutMJlvigCLoTogn1frKJfKFOwafGST38DRPJZSR2j3HnTG2LLtM7930fEsbeFX7YpuoJzQl3LEQvpPNxG9QcQTf6noovD11rxpBdkuODRcQoDVmwutddPDlQZtJTE1BursJM-b0QqZ3PUXV4ijNNiR8CT9aPBa2W2nQU1427uLVVkqZ8tH1ksyhwJxFX1ZIyRi7kqZyt98OJEoBGPwqKFVekAXMvdwVs6wJNZyubY4HwgpQLE8V7hbvlhn8R-UbWzhKdVRjV_OK_cpK8PxFoyJH7P_fZTafzcMQ9f4u-RKgiV0Z5j7djKgxHpK-4Z8qp11HQo3jkbqYUp8qvrNxTjv15PzkZYWVkaJ0aI3KOo_jX0cRbWcYffwAx7ceUiV-MPB9VAkb91B0ApfRJav8zDygutNGFMbZtA3IwHhFiMqKEDfVnvT0m_d_fkByfb88TYN4N6psYXyoWKZt3nlipwIv96zvJZK8Tf7xPQe0Eyrw0kP2yhu8VdWEVir28TBz7TwL0rWrwoph3mLkx08fdRzKo1QrBFgSpF6wK5K0XRcmE1O51zyBdtMwfp7GDGKNsS1olO4iZA8e1RlkgLXo3CgMkbufUbqUddB7v8BnmAItidsW55fJUl7NoWPveULSuqCp_f4",
//             description: "test"
//         }]
//     }

//     for (let i = 0; i < googleApiResult.mediaItems.length; i++) {
//         const image = googleApiResult.mediaItems[i];
//         images.push({
//             id: image.id,
//             alt: image.description ? image.description : "art made by Sam",
//             src: image.baseUrl,
//             width: 300,
//             height: 300
//         });
//     }

//     return {
//         props: {
//             images
//         }
//     }
// }

export default function ImageCarousel() {
    // `use` inside of a React component or Hook
    const data = use(fetcher());

    console.log('data', data);

    return (
        <Carousel cols={3} rows={1} gap={10} loop>
            {data?.props.images && data?.props.images.map((image: ImageProps) => {
                return (
                    <Carousel.Item key={"art_thumbnail_" + image.id}>
                        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}
