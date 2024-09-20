'use client'
import useProvider from '@/Hooks/useProvider';
import React, { useContext, useState } from 'react';
import AnimalModel from '../Models/AnimalModel';
import CatModel from '../Models/CatModel';
import NavSection from '../NavSection/NavSection';

const MainRoot = () => {
    const { selectedFile, setSelectedFile, catModel, setCatModel, animalModel, setAnimalModel, showImages, setShowImages } = useProvider()








    return (

        <main className="w-screen min-h-screen bg-black/95  lg:p-20 md:py-5 md:px-5">
            <NavSection />



            <section className='min-h-60 bg-slate-900 flex gap-4 '>
                {
                    showImages && showImages?.map((item, index) => <div key={item._id} className='border border-white/50 w-40 h-40'>


                    </div>)
                }


            </section>






            {/* model section  */}


            {
                catModel && <CatModel />
            }

            {
                animalModel && <AnimalModel />
            }



        </main>
    );
};

export default MainRoot;