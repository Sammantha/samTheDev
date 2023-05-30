import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './experienceCard.module.css';
import Image from 'next/image';
import { LinearProgress } from '@mui/material';

export default function ExperienceCard(props) {
    return (
        <Card>
            <CardContent>
                <div id="top layer" className={styles.cardContent}>
                    <Image
                        src={props.image}
                        alt={props.imageAlt}
                        width='150'
                        height='150'
                    />
                    <div className={styles.skillsContent}>
                        <Typography variant="h6" component="div">
                            Skills:
                        </Typography>
                        {props.skills.map(element => {
                            return (
                                <>
                                    {element.title} <LinearProgress id={element.title + "_" + element.value} variant="determinate" value={element.value} />
                                </>
                            )
                        })}
                    </div>
                </div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.subtitle}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{props.buttonText}</Button>
            </CardActions>
        </Card>
    );
}