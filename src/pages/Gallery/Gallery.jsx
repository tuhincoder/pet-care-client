// import { useEffect, useState } from 'react';
import gallery from '../../assets/images/gallery/gallery.jpg'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import GalleryCart from './GalleryCart';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loader/Loading';
import CoverImg from '../../components/common/CoverImg';

<<<<<<< HEAD
const Gallery = () => {
    const axiosPublic = useAxiosPublic()
=======
<<<<<<< HEAD
const Gallery = () => {
    const axiosPublic = useAxiosPublic()
=======

const Gallery = () => {

    const axiosPublic = useAxiosPublic()

>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
    const { data: galleries = [], isLoading } = useQuery({
        queryKey: ['galleries'],
        queryFn: async () => {
            const res = await axiosPublic.get('/gallery')
            return res.data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
<<<<<<< HEAD
        <div className=''>
=======
<<<<<<< HEAD
        <div className=''>
=======
        <div className='my-10'>
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
            {/* <div className=' mb-36'>
                <img className='h-[450px] w-full object-cover rounded-xl ' src={gallery} alt="" />

                <h2 className='-mt-36 ml-24 uppercase text-white text-5xl'> Pet Gallery </h2>
            </div> */}
            <CoverImg image={gallery} text={'pet gallery'}></CoverImg>
            <div className="  my-5 pl-5 md:pl-0">
                <h2 className="border-s-4 text-4xl font-serif border-sky-400 ps-2 ">Our Pet Gallery</h2>
                <h1 className="border-s-4 text-xl border-sky-300 ps-2">Gallery</h1>
            </div>
            {/* gallery */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-0'>
                {
                    galleries.map(gallery => <GalleryCart
                        key={gallery._id}
                        photo={gallery}
                    ></GalleryCart>)
                }
            </div>


        </div>
    );
};

export default Gallery;