import useProvider from '@/Hooks/useProvider';
import React from 'react';

const AnimalModel = () => {
    const { selectedFile, setSelectedFile, catModel, uploading, setCatModel, saveAnimalHandle, animalModel, setAnimalModel, formError } = useProvider()
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setSelectedFile(file);


    }





    return (
        <section className="w-screen h-screen fixed flex justify-center items-center  left-0 top-0 bg-black/50 ">
            <form onSubmit={saveAnimalHandle} className="md:w-[380px] md:min-h-[233px] relative flex flex-col text-black text-lg leading-3 py-9 px-6 border  rounded-3xl bg-white border-[#141414]">

                <span onClick={() => {

                    setAnimalModel(false)
                }} className="absolute  right-6 top-5  text-white/90 h-6 cursor-pointer w-6  leading-none bg-black  grid pb-1 justify-center items-center border rounded-full">x</span>
                <h6>
                    Add Animal
                </h6>
                <input type="text" name="name" placeholder="Animal Name" className=" h-12 bg-gray-200 mt-5  py-3 px-4 text-black placeholder:text-black w-full rounded-lg focus:outline outline-black" />
                <input onChange={handleFileChange} name='file' id="upload" type="file" placeholder="Animal Name" className=" hidden" />



                <label htmlFor="upload" className=" h-12 bg-gray-200 mt-5  px-4 text-black placeholder:text-black w-full rounded-lg mb-8 flex justify-between items-center focus:outline outline-black relative">
                    <p className="   z-50 pr-2">
                        {selectedFile ? selectedFile?.name?.split(".")[0].slice(0, 15) + "." + selectedFile?.type?.split("/")[1] : "Image"}
                    </p>
                    <span className=" text-sm rounded-lg bg-[#CCC] hover:scale-105 duration-100 ease-linear  transition-all active:scale-95 px-2 z-10  inline-block">
                        upload
                    </span>

                </label>
                {
                    formError && <span className='text-red-500 text-xs relative bottom-7 left-2'>
                        {formError}
                    </span>
                }


                <button type='submit' className=" mt-auto text-lg text-white bg-black rounded-lg w-full h-12 ">
                    {uploading ? "Creating..." : "Create Animal"}


                </button>


            </form>


        </section>
    );
};

export default AnimalModel;