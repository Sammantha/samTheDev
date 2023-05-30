import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './experienceCard.module.css';
import Image from 'next/image';
import Chart from 'react-google-charts';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function ExperienceCard(props) {
    const options = {
        colors: props.pieColors,
        title: `How I Spent My Time At This Position`,
        width: 500
    };
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.subtitle}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
                <div id="top layer" className={styles.cardContent}>
                    <Image
                        src={props.image}
                        alt={props.imageAlt}
                        width='150'
                        height='150'
                    />
                    <div>
                        <Chart
                            chartType="PieChart"
                            data={props.skills}
                            options={options}
                            width={"100%"}
                            height={"300px"}
                        />
                    </div>
                </div>
                <Typography variant="body2">
                    <div dangerouslySetInnerHTML={{ __html: props["description"] }}></div>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link href={props.buttonLink} target='_blank'>{props.buttonText}</Link>
                </Button>
            </CardActions>
        </Card>
    );
}