import useProvider from '@/Hooks/useProvider';
import React from 'react';

const AnimalModel = () => {
    const { selectedFile, setSelectedFile, catModel, setCatModel, animalModel, setAnimalModel, animal } = useProvider()
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setSelectedFile(file);


    }



    const saveAnimalHandle = (e) => {
        e.preventDefault()
        setAnimalModel(false)
    }

    return (
        <section className="w-screen h-screen fixed flex justify-center items-center  left-0 top-0 bg-black/50 ">
            <form className="md:w-[380px] md:min-h-[233px] flex flex-col text-black text-lg leading-3 py-9 px-6 border  rounded-3xl bg-white border-[#141414]">
                <h6>
                    Add Category
                </h6>
                <input type="text" placeholder="Name" className=" h-12 bg-gray-200 mt-5  py-3 px-4 text-black placeholder:text-black w-full rounded-lg focus:outline outline-black" />
                <input onChange={handleFileChange} id="upload" type="file" placeholder="Name" className=" hidden" />



                <label htmlFor="upload" className=" h-12 bg-gray-200 mt-5  px-4 text-black placeholder:text-black w-full rounded-lg mb-8 flex justify-between items-center focus:outline outline-black relative">
                    <p className="   z-50 pr-2">
                        {selectedFile ? selectedFile?.name?.split(".")[0].slice(0, 15) + "." + selectedFile?.type?.split("/")[1] : "Image"}
                    </p>
                    <span className=" text-sm rounded-lg bg-[#CCC] hover:scale-105 duration-100 ease-linear  transition-all active:scale-95 px-2 z-10  inline-block">
                        upload
                    </span>

                </label>


                <button onClick={saveAnimalHandle} className=" mt-auto text-lg text-white bg-black rounded-lg w-full h-12 ">
                    Save

                </button>


            </form>


        </section>
    );
};

export default AnimalModel;