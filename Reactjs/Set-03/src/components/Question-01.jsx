// Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link - https://picsum.photos/200

const Image = ({ link, width, height }) => {
  return <img src={link} alt="" style={{ width, height }} />;
};
export default Image;
