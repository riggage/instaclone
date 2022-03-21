export const PhotoContainer = ({ photo }) => {
    return (
        <>
        <p>{photo.author}</p>
        <img className="containPics" src={photo.download_url} alt="lorem picsum random" />
        </>
    )
}