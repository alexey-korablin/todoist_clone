import React, { useState } from "react";
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';

export const AddProject = ({ shouldShow=false }) => {
    const [show, setShow]  = useState(shouldShow);
    const [projectName, setProjectName] = useState('');
    const projectId = generatePushId();
    const { projects, setProjects } = useProjectsValue();

    const addProject = () => firebase.firestore().collection('projects')
        .add({
            projectId,
            name: projectName,
            userId: 't5MyE8PUN2'
        }).then(() => {
            setProjects([...projects]);
            setProjectName('');
            setShow(false);
        });

    return (
        <div className='add-project' data-testid='add-project'>
            {show && (
                <div className='data-project__input' data-testid='add-project-inner'>
                    <input 
                        value={projectName}
                        onChange={e => setProjectName(e.target.value)}
                        className='add-project__name'
                        data-testid='project-name'
                        type='text'
                        placeholder='Name your project'
                    />
                    <button
                        className='add-project__submit'
                        type='submit'
                        onClick={() => addProject()}
                        data-testid='add-project-submit'
                    >
                        Add project
                    </button>
                    <span
                        aria-label='Cancel adding project'
                        role='button'
                        tabIndex={0}
                        data-testid='hide-project-overlay'
                        className='add-project__cancel'
                        onClick={() => setShow(false)}
                        onKeyDown={() => setShow(false)}
                    >
                        Cancel
                    </span>
                </div>
            )}
            <span className='add-project__plus'>+</span>
            <span 
                aria-label='Add project'
                className='add-project__text'
                data-testid='add-project-action'
                onClick={() => setShow(!show)}
                onKeyDown={() => setShow(!show)}
                role='button'
                tabIndex={0}
            >
                Add Project
            </span>
        </div>
    )
}