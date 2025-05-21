import { WeaponScreenshotProps } from '@/interfaces/weaponDetails/WeaponDetailsInterfaces'
import Image from 'next/image'
import { useState } from 'react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

const screenshotDimensions = 400
const iconsDimensions = 40

const WeaponScreenshot = ({ screenshotUrl }: WeaponScreenshotProps) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            {
                !error && (
                    <Image
                        src={screenshotUrl} 
                        width={screenshotDimensions}
                        height={screenshotDimensions}
                        alt="An ingame screenshot of the weapon"
                        className="max-w-90 rounded-md"
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                            setError(true);
                            setIsLoading(false);
                        }}
                    />
                )
            }

            {isLoading && (
                <ScreenshotPlaceholder>
                    <p>Loading...</p>
                </ScreenshotPlaceholder>
            )
            }
            {error && (
                <ScreenshotPlaceholder>
                    <div className='flex flex-col items-center gap-2'>
                        <p>Oops! We couldn't load the image</p>
                        <Image
                            src="/icons/error-loading-image.svg"
                            width={iconsDimensions}
                            height={iconsDimensions}
                            alt="Error loading image"
                        />
                    </div>
                </ScreenshotPlaceholder>
            )}
        </div>
    )
}

export default WeaponScreenshot