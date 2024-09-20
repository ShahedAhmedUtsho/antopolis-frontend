'use client'
import useProvider from '@/Hooks/useProvider';
import React, { useContext, useState } from 'react';
import AnimalModel from '../Models/AnimalModel';
import CatModel from '../Models/CatModel';
import NavSection from '../NavSection/NavSection';

const MainRoot = () => {
    const { selectedFile, setSelectedFile, catModel, setCatModel, animalModel, setAnimalModel, animal } = useProvider()








    return (

        <main className="w-screen min-h-screen bg-black/95  lg:p-20 md:py-5 md:px-5">
            <NavSection />
            <section>

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