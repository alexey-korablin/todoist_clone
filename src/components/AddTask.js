import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons';
import moment from 'moment';
import { firebase } from  '../firebase';
import { useSelectedProjectValue } from '../context';

export const AddTask = ({
    showAddTaskMain=true,
    shouldShowMain=false,
    showQuickAddtask,
    setShowQuickAddTask
}) => {
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(shouldShowMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const { selectedProject } = useSelectedProjectValue();

    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
        }

        return (
            task && projectId && firebase.firestore().collection('tasks')
                .add({
                    archived: false,
                    projectId,
                    task,
                    date: collatedDate || taskDate,
                    userId: 't5MyE8PUN2'
                }).then(() => {
                    setTask('');
                    setProject('');
                    setShowMain('');
                    setShowProjectOverlay(false);
                })
        );
    };
    return (
        <div
            className={showQuickAddtask ? 'add-task add-task__overlay' : 'add-task'}
            data-testid='add-task-comp'
        >
            {showAddTaskMain && (
                <div
                    className='add-task__shallow'
                    data-testid='show-main-action'
                    onClick={() => setShowMain(!showMain)}
                >
                    <span className='add-task__plus'>+</span>
                    <span className='add-task__text'>Add Text</span>
                </div>
            )}
            {
                (showMain || showQuickAddtask) && (
                    <div className='add-task__main' data-testid='add-task-main'>
                        {showQuickAddtask && (
                            <>
                                <div data-testid='quick-add-task'>
                                    <h2 className='header'>Quick Add Task</h2>
                                    <span
                                        className='add-task__cancel-x'
                                        data-testid='add-task-quick'
                                    ></span>
                                </div>
                            </>
                        )}
                    </div>
                )
            }
        </div>
    );
}