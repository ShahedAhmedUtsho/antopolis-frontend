import useProvider from '@/Hooks/useProvider';
import React from 'react';

const NavSection = () => {
    const { selectedFile, setSelectedFile, catModel, setCatModel, animalModel, setAnimalModel, categories, activeCatId, setActiveCatId } = useProvider();




    return (
        <section className=" min-h-28  justify-between  gap-5 grid  grid-cols-12   ">
            <aside className="left flex gap-5 flex-wrap items-start  col-span-8">
                {
                    categories.map((item, index) => {

                        return (
                            <span key={index} onClick={() => { setActiveCatId(item._id) }} className={`inline-block  transition-all duration-100 ease-linear ${item._id === activeCatId && '  !text-green-500 hover:!bg-green-500/20 '} cursor-pointer hover:bg-red-500/20   text-red-500 rounded-full py-3 px-8 border-2 border-current capitalize`}  >
                                {item.name}

                            </span>
                        )
                    })
                }
            </aside>
            <aside className="right left flex gap-5 col-span-4 items-start  justify-end lg:text-[1.25vw] text-xs    ">
                <button onClick={() => { setCatModel(false); setAnimalModel(true) }} className={`inline-block transition-all duration-100 ease-linear   text-white hover:bg-white/95 hover:text-black active:scale-90 cursor-pointer rounded-full py-[1.1vw] px-[1.5vw] border-2 border-current capitalize`}  >
                    Add Animal
                </button>
                <button onClick={() => { setAnimalModel(false); setCatModel(true); }} className={`inline-block transition-all duration-100 cursor-pointer ease-linear    text-white hover:bg-white/95 active:scale-90 hover:text-black rounded-full py-[1.1vw] px-[1.5vw] border-2 border-current capitalize`}  >

                    Add Category
                </button>

            </aside>

        </section>
    );
};

export default NavSection;