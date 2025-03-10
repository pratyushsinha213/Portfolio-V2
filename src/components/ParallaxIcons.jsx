import { Parallax } from 'react-scroll-parallax';
import { RiReactjsLine, RiCodeSSlashLine, RiDatabaseLine, RiHtml5Line } from '@remixicon/react';

const ParallaxIcons = () => {
    const iconStyles = "absolute text-white opacity-70"; // Basic styles for icons

    return (
        <>
            <Parallax speed={-10}>
                <RiReactjsLine className={`${iconStyles} top-10 left-20 text-8xl -z-10`} />
            </Parallax>
            <Parallax speed={-5}>
                <RiCodeSSlashLine className={`${iconStyles} top-40 right-20 text-6xl -z-10`} />
            </Parallax>
            <Parallax speed={-8}>
                <RiDatabaseLine className={`${iconStyles} bottom-10 left-10 text-7xl -z-10`} />
            </Parallax>
            <Parallax speed={-3}>
                <RiHtml5Line className={`${iconStyles} bottom-10 left-10 text-7xl -z-10`} />
            </Parallax>
        </>
    );
};

export default ParallaxIcons;