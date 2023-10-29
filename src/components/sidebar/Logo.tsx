import { FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
    return (
        <div className="hidden lg:flex gap-2 p-5 pt-0 relative w-[100px]"> 
            <div className="h-4 w-4 bg-btnHighlight rounded-full"></div>
            <div className="h-4 w-4 bg-emerald-900 rounded-full transform-gpu scale-105"></div>
            <div className="h-4 w-4 bg-btnHighlight rounded-full"></div>
        </div>
    );
};

export default Logo;
