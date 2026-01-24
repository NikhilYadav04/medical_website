import { useEffect } from 'react';
import carousel1 from '../assets/carousel_1.jpg';
import carousel2 from '../assets/carousel_2.jpg';
import carousel3 from '../assets/carousel_3.jpg';
import bgImage from '../assets/bg.jpg';
import bgImage1 from '../assets/bg1.jpg';
import clinicLogo from '../assets/clinic_pic.png';
import doctorPic from '../assets/doctor_pic.jpeg';

const ImagePreloader = () => {
    useEffect(() => {
        const imagesToPreload = [
            carousel1,
            carousel2,
            carousel3,
            bgImage,
            bgImage1,
            clinicLogo,
            doctorPic
        ];

        imagesToPreload.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return null; // This component doesn't render anything
};

export default ImagePreloader;
