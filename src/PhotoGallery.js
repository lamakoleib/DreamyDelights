
const PhotoGallery = () => {

    const importAll = (requireContext) => requireContext.keys().map(requireContext);
    const images = importAll(require.context('./cakegallery', false, /\.(png|jpe?g|svg)$/));
    return (  
        <div className="photo-gallery text-center">
            <h1 className="gallery-title text-center">
                Gallery
            </h1>
            <p className="my-4">Get inspired by our cake artisans' beautiful creations.</p>
            <div className="container photo-gal">
                <div className="text-center">
                {images.map((image, index) => (
                <img key={index} src={image} alt={`Photo ${index + 1}`} className="photo"/>
                ))}

                </div>
            </div>
            
            
        </div>
    );
}
 
export default PhotoGallery;