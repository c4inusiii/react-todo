import Input from "./Input";
import AddButton from "./AddButton";

function Header({placeholder}) {
  return (
    <header className="header">
      <div className="header__inner">
        <Input placeholder={placeholder} />
        <AddButton />
      </div>
    </header>
  );
}
export default Header;
