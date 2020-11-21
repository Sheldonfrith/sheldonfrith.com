//By JohnDaly on github

// External Dependencies
import { useState, useEffect } from 'react'

const useAsyncImage = src => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        const loadingImage = new Image()
        loadingImage.src = src

        // Set up the Event handlers

        // If the image has already completed
        // then we can update the state immediately
        if (loadingImage.complete) {
            setImage({ src, isCached: true })
        }

        // When the image finishes loading
        // update the state, but indicate that
        // the image was not cached
        loadingImage.onload = () => {
            setImage({ src, isCached: false })
        }

        loadingImage.onerror = (err) => {
            setImage(null)
        }

        // Clean up the Event handlers
        return () => {
            if (loadingImage) {
                loadingImage.onload = null
                loadingImage.onerror = null
            }
        }
    },[src, setImage])

    return image
}

const useProgressiveImage = (placeholderSrc, fullSrc) => {
    const placeholder = useAsyncImage(placeholderSrc)
    const fullImage = useAsyncImage(fullSrc)

    return [placeholder, fullImage]
}

export default useProgressiveImage

