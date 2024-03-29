import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaRegPaperPlane } from 'react-icons/fa';

export const TaskDate = ({ 
    setTaskDate,
    showTaskDate,
    setShowTaskDate }) => showTaskDate && (
        <div className='task-date' data-testid='task-date-overlay'>
            <ul className='task-date__list'>
                <li>
                    <div
                        data-testid='task-date-today'
                        aria-label={'Select today as the task date'}
                        role='button'
                        tabIndex={0}
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FaSpaceShuttle />
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li>
                    <div
                        data-testid='task-date-tomorrow'
                        aria-label={'Select tomorrow as the task date'}
                        role='button'
                        tabIndex={0}
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FaSun />
                        </span>
                        <span>Tomorrow</span>
                    </div>
                </li>
                <li>
                    <div
                        data-testid='task-date-next-week'
                        aria-label={'Select next week as the task date'}
                        role='button'
                        tabIndex={0}
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FaRegPaperPlane />
                        </span>
                        <span>Next week</span>
                    </div>
                </li>
            </ul>
        </div>
    );