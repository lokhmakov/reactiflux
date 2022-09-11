import Loader from 'common/components/atoms/loader';
import {
    ComponentPropsWithoutRef,
    forwardRef,
    ReactEventHandler,
    useEffect,
    useState,
} from 'react';

import * as Styled from './image.style';

interface ImageProps extends ComponentPropsWithoutRef<'img'> {
    cover?: boolean;
    isFullWidth?: boolean;
    src: string;
    noMaxDimensions?: boolean;
    onLoad?: ReactEventHandler<HTMLImageElement>;
    alt: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
    (
        {
            cover = false,
            isFullWidth = false,
            src,
            noMaxDimensions = false,
            onLoad,
            alt,
            ...props
        },
        ref,
    ) => {
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            setIsLoading(true);
            console.log('start');
        }, [src]);

        const handleOnLoad = () => {
            setIsLoading(false);
            console.log('start');
        };

        return (
            <>
                <Styled.Image
                    $cover={cover}
                    $isFullWidth={isFullWidth}
                    $noMaxDimensions={noMaxDimensions}
                    alt={alt}
                    src={src}
                    onLoad={handleOnLoad}
                    ref={ref}
                    {...props}
                />
                <div>
                    <Loader />
                </div>
            </>
        );
    },
);