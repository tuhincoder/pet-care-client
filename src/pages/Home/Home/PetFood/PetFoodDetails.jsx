import { useLoaderData, useLocation, useNavigate, } from "react-router-dom";
import detailsImg from '../../../../assets/images/category/rabbit/rabbit4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
// tabs class
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const PetFoodDetails = () => {
    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    const details = useLoaderData()
    const { user } = useAuth()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()


    const { _id, name, image, price, rating,  sku, longDescription, notPrice } = details || {};
    console.log(details.photos);


    // add to cart details
    const handleAdToCart = () => {
        // console.log(item);
        if (user && user.email) {
            // DONE: add to the cart information this item,
            const cartItem = {
                foodId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/api/v1/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Your ${name} order successfully and added to the cart`,
                            showConfirmButton: false,
                            timer: 2500
                        });
                    }
                })

        }
        else {
            // go to the login
            Swal.fire({
                title: "you are not login?",
                text: "if you log in than you add to the cart this item!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            });
        }
    }


    // tabs
    const [tabIndex, setTabIndex] = useState(0);



    return (
        <div className="mb-20 ">
            <div className=' mb-52'>
                <img className='h-[450px] w-full object-cover rounded-xl ' src={detailsImg} alt="" />
                <h2 className='-mt-36 ml-24 uppercase text-white text-5xl'> Pet Food Details  </h2>

            </div>
            {/* carousel */}
            <div className="flex flex-col md:flex-row px-5 md:px-0">
                <div className=" md:flex-1 h-1/2 w-full">
                    <Carousel>

                        {
                            details.photos.map(img => <img className="w-full" key={img} src={img.photo} alt="" />)


                        }
                    </Carousel>
                </div>
                {/* content */}
                <div className="md:flex-1  p-5">
                    <div className="">
                        <h1 className="text-4xl font-mono font-bold text-gray-500">{name} 250g pack</h1>
                        <div className="flex items-center "><Rating
                            className="mt-2 mr-7"
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                            <p className="text-xl">({rating}) 2 reviews <span className="text-md text-green-500 font-bold border px-[3px]">in stock</span> </p></div>

                        <div className="mt-5">
                            <p className="text-xl font-serif"><span className="text-5xl mr-2 text-red-500 ">${price}</span>
                                <span className="line-through text-3xl p-2">${notPrice}</span></p>
                        </div>
                        <p className="text-xl mt-5 text-gray-500">{sku}</p>
                        <div className="divider divide-blue-200"></div>
                        <p className="text-gray-500">{longDescription}</p>
                        <ul className="list-disc mt-10 bg-sky-100 p-5 text-xl rounded-md hover:bg-gray-300 capitalize duration-500 ">
                            <li>estimated delivery time 5-10 days</li>
                            <li>expired data after 10 month </li>
                            <li>this pet food is totally healthy</li>
                        </ul>
                        <div className="mt-10 flex items-center  ">
                            <div className="text-2xl font-serif  flex space-x-5 ">
                                <button onClick={() => setCount((prev) => prev - 1)}
                                    className="text-3xl border px-6 btn  "
                                >-</button>
                                <h1>{count}</h1>
                                <button onClick={() => setCount((prev) => prev + 1)}
                                    className="text-3xl border px-6 btn  "
                                >+</button>

                            </div>
                            <div className=" mx-auto  ">
                                <button onClick={handleAdToCart} className="uppercase font-serif bg-sky-200  px-12 md:px-16 py-3 rounded-md hover:bg-gray-300 duration-500">ADD To  cart </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*tab*/}
            <div className="md:w-1/2 px-5 md:px-0">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab><p className="text-xl font-medium font-sans">Description</p></Tab>
                        <Tab>
                            <p className="text-xl font-medium font-sans">Excessive info</p>
                        </Tab>
                        <Tab>
                            <p className="text-xl font-medium font-sans">Review</p>
                        </Tab>


                    </TabList>
                    <TabPanel>
                        <div className="space-y-4">
                            <p className="">{longDescription}</p>
                            <p>This is a type of food that is specifically formulated and intended for consumption by pets. It is usually sold in the form of dry kibble or wet cans, and is designed to meet the nutritional needs of a variety of different types of pets, including dogs, cats, and small animals like guinea pigs and rabbits.</p>
                            <p>This food may help from a variety of different ingredients, including meat, grains, vegetables, and fortified vitamins and minerals. Some pet food is formulated for specific life stages, such as puppy or senior, and may contain higher levels of certain nutrients to support the needs of pets at those stages of life.</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h1 className="text-xl font-bold mb-3 ">Pet Food Overload: Navigating Through Excessive Information</h1>
                            <p>With so many pet food options and opinions out there, it’s easy to feel overwhelmed. From kibble to raw diets, grain-free to organic, the sheer volume of information can make choosing the right food for your pet seem daunting.</p>
                            <p>
                                <b>Cutting Through the Noise:</b>
                                Not all advice is created equal. When it comes to your pet’s diet, it&apos;s important to rely on evidence-based information and consult with your veterinarian. They can help you sort through the noise and make informed decisions tailored to your pet’s specific needs.
                            </p>
                            <p><b>Key Considerations:</b>
                                Focus on the basics: balanced nutrition, quality ingredients, and your pet’s individual dietary requirements. Avoid getting lost in trends or marketing buzzwords that may not align with your pet&apos;s health.
                            </p>
                            <p>
                                <b>Making Informed Choices:</b>
                                While it’s helpful to be informed, too much conflicting advice can lead to confusion. Stick to trusted brands and sources, and remember that the best diet for your pet is one that keeps them healthy, happy, and full of energy.
                            </p>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className="flex flex-col items-center "><Rating
                                className="mt-2 mr-7"
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                                <p className="text-xl">({rating}) 2 reviews  </p></div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>

    );
};

export default PetFoodDetails;