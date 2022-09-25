const Home = ({ ruta_img1, ruta_img2 }) => {
  return (
    <>
      <h1>Bienvenido a Happy Cake</h1>
      <h6>El Lugar de los pasteles felices</h6>
      <div className="imagenes-home ">
        <img src={ruta_img1} alt="" />
        <img src={ruta_img2} alt="" className="img2" />
      </div>
    </>
  );
};
export default Home;
