import styled from "./header.module.css";
const Header = () => {
  return (
    <>
      <header className={styled.header}>
        <div className="container">
          <h1 className={styled.header_title}>Keeper</h1>
        </div>
      </header>
    </>
  );
};
export default Header;