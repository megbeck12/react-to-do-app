import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ modalOpen, setModalOpen }) {
  return (
    <div>
    {modalOpen && (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.closeButton} onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button">
                <MdOutlineClose>
                </MdOutlineClose>
            </div>
            <form className={styles.form}>
                <h1 className={styles.formTitle}>Add Task</h1>
                <label htmlFor="title">
                    title
                    <input type="text" id="title"></input>
                </label>
                <label htmlFor="status">
                    status
                    <select name="status" id="status">
                        <option value="incomplete">Incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </label>
                <div className={styles.buttonContainer}>
                    <Button type="submit" variant="primary">
                        Add Task
                    </Button>
                    <Button type="button" variant="secondary">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    </div>
    )}
    </div>
  )
}

export default TodoModal;
