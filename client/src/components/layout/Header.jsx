import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import searchIcon from "../../assets/icon_search.svg";
import toggleCreateGroupModalIcon from "../../assets/icon_group_add.svg";
import manageGroupIcon from "../../assets/icon_group_gear.svg";
import bellIcon from "../../assets/icon_bell.svg";
import logoutIcon from "../../assets/icon_logout.svg";

import styles from "./Header.module.css";
import OpenModal from "./OpenModal";

const Header = () => {
  const navigate = useNavigate();
  const [isDeviceMobile, setIsDeviceMobile] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  // const [isManageGroupBoxOpen, setIsManageGroupBoxOpen] = useState(false);
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] =
    useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleMobile = () => {
    setIsDeviceMobile((prev) => !prev);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen((prev) => !prev);
  };

  const toggleCreateGroupModal = () => {
    setIsCreateGroupModalOpen((prev) => !prev);
  };

  const manageGroup = () => {
    navigate("/groups");
  };

  const toggleNotificationsModal = () => {
    setIsNotificationsModalOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLogoutModalOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className={styles.brand}>
          <h1>Vibely</h1>
          <RxHamburgerMenu onClick={handleMobile} className={styles.menu} />
        </div>
        <ul>
          <li title="Search" onClick={toggleSearchModal}>
            <img src={searchIcon} />
          </li>
          <li title="Create Group" onClick={toggleCreateGroupModal}>
            <img src={toggleCreateGroupModalIcon} />
          </li>
          <li title="Manage Group" onClick={manageGroup}>
            <img src={manageGroupIcon} />
          </li>
          <li title="Notifications" onClick={toggleNotificationsModal}>
            <img src={bellIcon} />
          </li>
          <li title="Logout" onClick={handleLogout}>
            <img src={logoutIcon} />
          </li>
        </ul>
      </nav>
      {isSearchModalOpen && (
        <OpenModal toggleModal={toggleSearchModal} modalType="search" />
      )}
      {isNotificationsModalOpen && (
        <OpenModal
          toggleModal={toggleNotificationsModal}
          modalType="notifications"
        />
      )}
      {isCreateGroupModalOpen && (
        <OpenModal
          toggleModal={toggleCreateGroupModal}
          modalType="create-group"
        />
      )}
    </header>
  );
};

export default Header;
