'use client'

import * as Progress from '@radix-ui/react-progress';
import { useState, useEffect } from 'react';

interface ProgressSongProps {
    durationMili?: any
    //onChange?: (value: number) => void
}



const ProgressSong: React.FC<ProgressSongProps> = ({
    durationMili,
}) => {
    const [progress, setProgress] = useState(0);
    const b = durationMili?.toString()
    console.log(b);
    useEffect(() => {
        const timer = setTimeout(() => setProgress(100), 500);

        return () => clearTimeout(timer);


    }, []);


    return (
        <Progress.Root className="ProgressRoot relative overflow-hidden bg-red-500 rounded-full w-full h-4" value={progress}>
            <Progress.Indicator
                className={`ProgressIndicator bg-white w-full h-full transition duration-[${b}ms] `}

                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    )
}

export default ProgressSong