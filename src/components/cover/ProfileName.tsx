import Link from 'next/link'; 
import Button from '@/components/ui/Button';
import { Instagram } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName  = ({}:ProfileNameProps) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight capitalize">
            prem vishwakarma 
            <div className="text-sm font-thin flex justify-between items-center"> 
                <Link
                    className="block md:hidden"
                    href="https://instagram.com/iam_prem_sharma"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Instagram />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
