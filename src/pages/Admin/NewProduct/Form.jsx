import React, { useState } from 'react';
import useStyles from './styles';
import { Form as Forms, useFormikContext } from 'formik';
import {
    Button,
    Grid,
    InputAdornment,
    Typography
} from '@material-ui/core';
import Textfield from '../../../components/FormsUI/Textfield';
import SelectField from '../../../components/FormsUI/Select';
import { BiImageAdd } from 'react-icons/bi';


const Form = ({ handleSubmit }) => {
    const classes = useStyles();
    const { setFieldValue } = useFormikContext();

    // useStates
    const [imageSrc, setImageSrc] = useState();
    const [isUploaded, setIsUploaded] = useState(true);
    const categories = ["Cakes", "Cupcakes", "Doughnuts", "Sweets"];


    // Event Handlers
    const handleOnChange = async(changeEvent) => {
        const reader = new FileReader();

        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
        }
        
        reader.readAsDataURL(changeEvent.target.files[0]);
        const fileImg = changeEvent.target;
        const formData = new FormData();
        
        for( const file of fileImg.files){
            formData.append("file", file);
        }
    
        formData.append('upload_preset', 'my-uploads')
    
        await fetch("https://api.cloudinary.com/v1_1/dfb4ysfn4/image/upload", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                setIsUploaded(false);
                setFieldValue("image", res.secure_url);
            })
    }

    return (
        <Forms 
            onSubmit={handleSubmit}
            autoComplete="off"
            className={classes.form}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography 
                        variant="h5"
                        color="primary" 
                        align="center"
                        gutterBottom
                        className={classes.font1}
                    >
                        add <span className={classes.title}> NEW PRODUCT </span>
                    </Typography>
                </Grid>

                <Grid item xs={12}className={classes.catalog}>
                    {
                        imageSrc ? (
                            <label 
                                htmlFor="file"
                            >
                                <img 
                                    className={classes.uploadImage}
                                    src={imageSrc} 
                                    alt="productImage"
                                />
                            </label>
                        ) : (
                            <label 
                                htmlFor="file"
                                className={classes.uploadImage}
                            >
                                <BiImageAdd className={classes.font2} />
                            </label>
                        )
                    }
                    <input 
                        name="file" 
                        type="file" 
                        id="file"
                        className={classes.fileUpload}
                        onChange={handleOnChange} 
                        hidden 
                    />
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="name"
                        label="Product Name"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="price"
                        label="Product Price"
                        type="number"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    ₱
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <SelectField 
                        name="category"
                        label="Product Category"
                        options={categories}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button 
                        color="primary"
                        variant="contained" 
                        fullWidth
                        type="submit"
                        disabled={isUploaded}
                        style={{ marginTop: "25px" }}
                    >
                        Add Product
                    </Button>
                </Grid>
            </Grid>
        </Forms>
    )
}

export default Form;
