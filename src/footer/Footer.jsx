import styled from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={styled.footer}>
        <div className="container">
          <div className={styled.copyright}>Copyright &#169; 2023</div>
        </div>
      </footer>
    </>
  );
};
export default Footer;