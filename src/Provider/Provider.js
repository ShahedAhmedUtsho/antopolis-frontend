'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProviderContext = createContext()
const Provider = ({ children }) => {
    const api = "https://antopolis-shahed-ahmed-backend.vercel.app";
    const [categories, setCategories] = useState([])
    const [activeCatId, setActiveCatId] = useState("66ec7945b9c51e5a4bd575da");
    const [showImages, setShowImages] = useState([])
    const [formError, setFormError] = useState("")
    const [uploading, setUploading] = useState("")
    const { data, isLoading: cateLoading, error: cateError, refetch: cateFetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            try {
                const res = await axios.get(`https://antopolis-shahed-ahmed-backend.vercel.app/categories`);
                return res.data

            } catch (error) {
                throw new Error('Error fetching categories: ' + error.message);

            }


        }
    })
    const { data: showImage, isLoading: ShowLoading, error: showError, refetch: showFetch } = useQuery({
        queryKey: [activeCatId],
        queryFn: async () => {
            try {
                const res = await axios.get(`https://antopolis-shahed-ahmed-backend.vercel.app/images/${activeCatId}`);
                return res.data

            } catch (error) {
                throw new Error('Error fetching categories: ' + error.message);

            }


        }
    })


    useEffect(() => {
        if (data) {
            setCategories(data)
        }
    }, [data]);

    useEffect(() => {
        if (showImage) {
            setShowImages(showImage)
        }
    }, [showImage])








    const [catModel, setCatModel] = useState(false);



    const [animalModel, setAnimalModel] = useState(false);



    const [selectedFile, setSelectedFile] = useState(null);




    const saveAnimalHandle = async (e) => {
        e.preventDefault();
        setFormError("")

        const name = e.target.name.value;
        if (!name) {

            setFormError("name is required")
            return
        }
        if (!selectedFile) {
            setFormError("image is required")
            return;
        }
        const fileType = selectedFile?.type?.split("/")[0];
        console.log(fileType, "file type")
        if (fileType === "image" === false) {

            setFormError("only images please ")

            return
        }

        const category = activeCatId;






        if (selectedFile) {
            setUploading(true);
            const data = new FormData();
            data.append("file", selectedFile);
            data.append("upload_preset", "images");
            data.append("cloud_name", "dxpdy0jfz");

            try {
                const res = await axios.post(`https://api.cloudinary.com/v1_1/dxpdy0jfz/image/upload`, data);
                const url = res?.data?.url;
                console.log(url);


                const backendResponse = await axios.post('https://antopolis-shahed-ahmed-backend.vercel.app/images', { name, photoUrl: url, category })




                showFetch()





                setAnimalModel(false)

            } catch (error) {

                setFormError(error.message)
            }
            finally {

                setUploading(false);

            }

        }









    }







    const share = {
        selectedFile, setSelectedFile, catModel, api, setCatModel, animalModel, setAnimalModel,
        cateLoading, cateFetch, cateError,
        categories,
        activeCatId, setActiveCatId,
        showImages, setShowImages,
        saveAnimalHandle,
        formError,
        uploading
    }

    if (cateLoading) {
        return <div>Loading categories...</div>;
    }

    if (cateError) {
        return <div>Error fetching categories: {cateError.message}</div>;
    }

    return (
        <ProviderContext.Provider value={share} >
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;