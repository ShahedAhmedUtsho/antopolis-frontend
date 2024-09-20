'use client'
import useProvider from '@/Hooks/useProvider';
import React, { useContext, useState } from 'react';
import AnimalModel from '../Models/AnimalModel';
import CatModel from '../Models/CatModel';
import NavSection from '../NavSection/NavSection';
import Image from 'next/image';

const MainRoot = () => {
    const { selectedFile, setSelectedFile, catModel, setCatModel, animalModel, setAnimalModel, showImages, setShowImages } = useProvider()








    return (

        <main className="w-screen min-h-screen  bg-black/95   lg:p-20 md:py-5 md:px-5">
            <NavSection />



            <section className='min-h-60 mt-10  flex flex-wrap gap-4'>
                {
                    showImages && showImages.map((item) => (
                        <div key={item._id} className=' w-48  flex flex-col h-64'>
                            <div className="relative h-52 rounded-md   w-full">
                                <Image
                                    src={item?.photoUrl}
                                    alt={item?.name || 'Image'}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    placeholder='blur'
                                    className='object-contain '
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                                />
                            </div>
                            <h6 className='text-center text-white/80 mt-2 uppercase text-lg '>
                                {item.name}
                            </h6>
                        </div>
                    ))
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