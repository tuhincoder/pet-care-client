import { useQuery } from '@tanstack/react-query';
import petListingImg from '../../assets/images/category/cats/details.jpg'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Loading from '../../components/Loader/Loading';
import CampaignCart from './CampaignCart';
import CoverImg from '../../components/common/CoverImg';
import CoverText from '../../components/common/CoverText';
const DonationCampaign = () => {
    const axiosPublic = useAxiosPublic()

    const { data: campaign = [], isLoading } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () => {
            const res = await axiosPublic('/api/v1/campaigns-read')
            return res.data
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
        <div className='mb-10'>
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)

            <CoverImg image={petListingImg} text={'donation campaigns'}></CoverImg>

            <div className='pl-5 md:pl-0'>
                <CoverText heading={'donation campaigns collection'} subHeading={'donate pets'}></CoverText>
            </div>
            {/* ----------------- */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-5 md:px-0'>
                {
                    campaign.map(item => <CampaignCart
                        key={item._id}
                        item={item}
                    ></CampaignCart>)
                }
            </div>
        </div>
    );
};

export default DonationCampaign;