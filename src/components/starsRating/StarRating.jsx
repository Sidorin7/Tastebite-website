import star from './star.svg'
const StarRating = () => {
  return (
    <>
      {[...Array(5)].map((item,index) => {
        return (
            <img key={index} src={star} alt="" />
            
        )
      })}
    </>
  );
};

export default StarRating;
