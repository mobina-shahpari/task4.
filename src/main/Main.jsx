import styled from "./main.module.css";
const cardDatas = [
  {
    id: 1,
    title: "Delegation",
    text: "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
  },
  {
    id: 2,
    title: "Loops",
    text: "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
  },
  {
    id: 3,
    title: "Arrays",
    text: "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
  },
  {
    id: 4,
    title: "Hardware vs. Software",
    text: "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
  },
  {
    id: 5,
    title: "Big ideas",
    text: "Eat more sushi",
  },
];
const Main = () => {
  return (
    <>
      <main className={styled.main}>
        <div className="container">
          <div className={styled.cards}>
            {cardDatas.map((cardData) => {
              return (
                <div key={cardData.id} className={styled.card}>
                  <h2 className={styled.card_title}>{cardData.title}</h2>
                  <p className={styled.card_text}>{cardData.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;