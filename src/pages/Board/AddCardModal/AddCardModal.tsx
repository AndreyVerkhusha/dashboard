import React, { FC, useCallback, useEffect } from "react";
import { Transition } from "react-transition-group";

import "./AddCardModal.scss";

type Props = {
  visible: boolean;
  onClose: () => void;
  handleCardAdd: (title: string, detail: string) => void;
};
const AddCardModal: FC<Props> = ({ visible, onClose, handleCardAdd }) => {
  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");

  const clearState = useCallback(() => {
    onClose();
    setTitle("");
    setDetail("");
  }, [onClose]);

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") clearState();
    },
    [clearState]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => document.removeEventListener("keydown", escFunction);
  }, [escFunction]);

  return (
    <Transition in={visible} timeout={200} unmountOnExit mountOnEnter>
      {(state) => (
        <div
          className={`add__card-parent-modal ${state}`}
          onClick={() => clearState()}
        >
          <div
            className={`add__card-container ${state}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="add__card-label">Card Title</span>
              <input
                autoFocus
                className="add__card-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <span className="add__card-label">Detail</span>
              <textarea
                className="add__card-input"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                rows={10}
              />
            </div>
            <button
              disabled={title === "" && detail === ""}
              className="add__card-save-button"
              onClick={() => (handleCardAdd(title, detail), clearState())}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default AddCardModal;
