import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id, taskDesc }) => {
    const archiveTask = () => {
        firebase.firestore().collection('tasks').doc(id)
            .update({ archived: true });
    };
    return (
        <div 
            aria-label={`Mark ${taskDesc} as done?`}
            role='button'
            tabIndex={0}
            className='checkbox-holder' 
            onClick={() => archiveTask()}
            onKeyDown={() => archiveTask()}
        >
            <span className='checkbox' />
        </div>
    );
}