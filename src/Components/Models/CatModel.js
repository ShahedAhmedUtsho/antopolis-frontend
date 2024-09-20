"use client"
import useProvider from '@/Hooks/useProvider';
import axios from 'axios';
import React, { useState } from 'react';

const CatModel = () => {
    const { selectedFile, setSelectedFile, api, catModel, setCatModel, animalModel, cateFetch, setAnimalModel, animal } = useProvider();
    const [loading, setLoading] = useState(false)


    const saveCategoryHandle = async (e) => {
        e.preventDefault();
        const name = e.target.name.value.toLowerCase();
        console.log(name)
        setLoading(true)
        try {
            const res = await axios.post(`https://antopolis-shahed-ahmed-backend.vercel.app/categories`, { name })
            cateFetch()


        } catch (error) {
            console.log(error.message)

        }
        finally {
            setLoading(false)
            setCatModel(false)
        }






    }




    return (
        <section className="w-screen h-screen fixed flex justify-center items-center  left-0 top-0 bg-black/50 ">
            <form onSubmit={saveCategoryHandle} className="md:w-[380px] md:min-h-[233px] flex flex-col text-black text-lg leading-3 py-9 px-6 border  rounded-3xl bg-white border-[#141414]">
                <h6>
                    Add Category
                </h6>
                <input type="text" name='name' placeholder="Name" className=" h-12 bg-gray-200 mt-5 py-3 px-4 text-black placeholder:text-black w-full rounded-lg focus:outline outline-black" />
                <button type='submit' className=" mt-auto text-lg text-white bg-black rounded-lg w-full h-12 ">
                    {loading ? "Saving..." : "Save"}

                </button>


            </form>


        </section>
    );
};

export default CatModel;