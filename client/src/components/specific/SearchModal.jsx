/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";

import AnimatedCard from "../UI/AnimatedCard";
import searchIcon from "../../assets/icon_search.svg";

import styles from "./SearchModal.module.css";

const SearchModal = () => {
  return (
    <AnimatedCard category="wide">
      <form className={styles["search-form"]}>
        <input type="text" placeholder="Search" />
        <button title="Click Here">
          <img src={searchIcon} />
        </button>
      </form>
    </AnimatedCard>
  );
};

SearchModal.propTypes = {
  className: PropTypes.string,
};

export default SearchModal;
