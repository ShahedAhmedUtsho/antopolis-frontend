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



    const share = {
        selectedFile, setSelectedFile, catModel, api, setCatModel, animalModel, setAnimalModel,
        cateLoading, cateFetch, cateError,
        categories,
        activeCatId, setActiveCatId,
        showImages, setShowImages
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