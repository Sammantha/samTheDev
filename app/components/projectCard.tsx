'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { Button } from '@mui/material';
import Image from 'next/image';

type projectCardProps = {
    buttonLink: string,
    buttonText: string,
    children?: string,
    description: string,
    id: number,
    image: string,
    imageAlt: string,
    subtitle: string,
    title: string,
}

export default function ProjectCard(props: projectCardProps) {
    return (
        <Card className={styles.grid}>
            <CardContent className={styles.gridFlex}>
                <Typography variant="h5" component="div">
                    {props?.title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props?.subtitle}
                </Typography>
                <Image
                    src={props?.image}
                    alt={props?.imageAlt}
                    width={460}
                    height={360} />
                <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: props.description }}></Typography>
            </CardContent>
            <CardActions>
                {props?.buttonLink === ""
                    ?
                    <Button disabled size="small">
                        {props?.buttonText}
                    </Button>
                    :
                    <Link
                        href={props?.buttonLink}
                        target='_blank'
                    >
                        <Button size="small">
                            {props?.buttonText}
                        </Button>
                    </Link>
                }
            </CardActions>
        </Card >
    );
}