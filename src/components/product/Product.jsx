import "./product.css";

const Product = ({img,link,tools}) => {
  return (

    <>
    <div className="p">
      <p className="tools"><strong>Technologies used:</strong> <br/> {tools}</p>
      <p className="tools">Click Here Go to Live.</p>
      
      {/* <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div> */}
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
    </>
  );
};

export default Product;
