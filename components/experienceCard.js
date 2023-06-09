import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from '../styles/Home.module.css';
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
        <Card className={styles.cardOutline}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.subtitle}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    {props.years}
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
                <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: props["description1"] }}></Typography>
                {props.examples && <div className={styles.exampleImages}>
                    {props.examples.map((example, index) => {
                        return (
                            <div className={styles.exampleImage} key={`example_${index}`}>
                                <Link href={example.link} >
                                    <Image
                                        src={example.src}
                                        alt={example.alt}
                                        width='200'
                                        height='200'
                                    />
                                </Link>
                                <Typography variant='caption'>{example.caption}</Typography>
                            </div>
                        )
                    })}
                </div>}
                <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: props["description2"] }}></Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link href={props.buttonLink} target='_blank'>{props.buttonText}</Link>
                </Button>
            </CardActions>
        </Card>
    );
}