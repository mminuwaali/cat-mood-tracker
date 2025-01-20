import "./style.scss";
import Left from "./(components)/left";
import Right from "./(components)/right";

export default function Page() {
  return (
    <section className="home">
      <Left />
      <Right />
    </section>
  );
}
