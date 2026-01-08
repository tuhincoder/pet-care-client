import axios from "axios";

const axiosPublic = axios.create({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
    baseURL: 'https://pet-care-server-delta.vercel.app',

});

const useAxiosPublic = () => {
    return axiosPublic;
};

<<<<<<< HEAD
export default useAxiosPublic;
=======
export default useAxiosPublic;
=======
  baseURL: "https://pet-care-server-delta.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
