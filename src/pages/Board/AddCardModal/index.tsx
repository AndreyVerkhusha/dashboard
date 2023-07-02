import React, { FC, useEffect } from 'react'
import { Transition } from 'react-transition-group';

import css from './index.module.scss'

type Props = {
    visible: boolean
    onClose: () => void
    handleCardAdd: (title: string, detail: string) => void
}
const AddCardModal: FC<Props> = ({visible, onClose, handleCardAdd}) => {

    const [title, setTitle] = React.useState('')
    const [detail, setDetail] = React.useState('')

    let identifyClassName = (value: string) => {
        if (value === "entered")
            return css.entered
        if (value === "exiting")
            return css.exiting
    }
    let clearState = () => {
        onClose();
        setTitle("")
        setDetail("")
    }
    let escFunction = (event: KeyboardEvent) => {
        if (event.key === "Escape")
            clearState();
    }

    useEffect(() => {
        document.addEventListener("keydown", escFunction);
        return () =>
            document.removeEventListener("keydown", escFunction)
    }, [])
    return (
        <Transition
            in={visible}
            timeout={200}
            unmountOnExit
            mountOnEnter
        >
            {state =>
                <div
                    className={`${css.parentModal} ${identifyClassName(state)}`}
                    onClick={() => clearState()}
                >
                    <div
                        className={`${css.container} ${identifyClassName(state)}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div>
                            <span className={css.label}>Card Title</span>
                            <input
                                autoFocus
                                className={css.input}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                            />
                        </div>
                        <div>
                            <span className={css.label}>Detail</span>
                            <textarea
                                className={css.input}
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                rows={10}
                            />
                        </div>
                        <button
                            disabled={title === "" && detail === ""}
                            className={css.saveButton}
                            onClick={() => (handleCardAdd(title, detail), clearState())}
                        >
                            Add
                        </button>
                    </div>
                </div>
            }
        </Transition>

    )
}

export default AddCardModal