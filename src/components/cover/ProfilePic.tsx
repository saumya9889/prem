import Image from 'next/image'; 
import ProfileImage from "../../../public/images/profilePic.jpeg"

interface ProfilePicProps {}

const ProfilePic = ({}:ProfilePicProps) => {
    return (
        <div className="">
            <Image
                alt="Prem Vishwakarma"
                src={ProfileImage}  
                className="object-cover border-4 border-white rounded-full shadow-md h-[120px] w-[120px]"
            />
        </div>
    );
};

export default ProfilePic;
