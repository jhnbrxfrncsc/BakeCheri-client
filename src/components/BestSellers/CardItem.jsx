import React from 'react';

// MUI
import useStyle from './BestSellersStyles';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from '@material-ui/core';

// router
import { Link } from 'react-router-dom';

const CardItem = ({id, name, title, image, price}) => {
    const classes = useStyle();
    return(
        <Card>
            <CardActionArea
                component={Link}
                to={`/products/${id}`}
            >
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                >
                    <Box className={classes.price}>
                        <Typography className={classes.priceTxt}>
                            ₱{price}
                        </Typography>
                    </Box>
                </CardMedia>
            </CardActionArea>
            <CardContent className={classes.contentCard}>
                <Typography 
                    align="center"
                    variant="h6" 
                    component="h2" 
                    className={classes.font2}
                >
                    {name.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardItem
