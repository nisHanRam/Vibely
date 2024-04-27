import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const Backdrop = lazy(() => import("../UI/Backdrop"));
const Spinner = lazy(() => import("../UI/Spinner"));
const SearchModal = lazy(() => import("../specific/SearchModal"));
const NotificationsModal = lazy(() => import("../specific/NotificationsModal"));
const CreateGroupModal = lazy(() => import("../specific/CreateGroupModal"));

import styles from "./OpenModal.module.css";

const OpenModal = ({ toggleModal, modalType }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={toggleModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className={styles["modal-container"]}>
          <Suspense fallback={<Spinner />}>
            {modalType === "search" && (
              <SearchModal toggleModal={toggleModal} />
            )}
            {modalType === "notifications" && (
              <NotificationsModal toggleModal={toggleModal} />
            )}
            {modalType === "create-group" && (
              <CreateGroupModal toggleModal={toggleModal} />
            )}
          </Suspense>
        </div>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default OpenModal;
