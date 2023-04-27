import { BsFillBookmarkFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <BsFillBookmarkFill size={24} />
        {favorites.length ? <span>{favorites.length}</span> : ""}
      </div>
    </header>
  );
};
export default Header;
