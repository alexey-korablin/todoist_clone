import React, { useState } from 'react';
import {
    FaChevronDown,
    FaRegCalendarAlt,
    FaRegCalendar,
    FaInbox
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className='sidebar' data-testid='sidebar'>
            <ul className='sidebar__generic'>
                <li
                    className={ active === 'inbox' ? 'active' : undefined }
                    data-testid='inbox'
                >
                    <div
                        data-testid='inbox-action' 
                        aria-label='Show Inbox Tasks'
                        role='button'
                        tabIndex={0}
                        onClick={() => {
                            setActive('inbox');
                            setSelectedProject('INBOX');
                        }}
                        onKeyDown={() => {
                            setActive('inbox');
                            setSelectedProject('INBOX');
                        }}
                    >
                        <span><FaInbox /></span>
                        <span>Inbox</span>
                    </div>
                </li>
                <li
                    className={ active === 'today' ? 'active' : undefined }
                    data-testid='today'
                >
                    <div
                        data-testid='today-action'
                        aria-label='Show Today Tasks'
                        role='button'
                        tabIndex={0}
                        onClick={() => {
                            setActive('today');
                            setSelectedProject('TODAY');
                        }}
                        onKeyDown={() => {
                            setActive('today');
                            setSelectedProject('TODAY');
                        }}
                    >
                        <span>
                            <FaRegCalendar/>
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li
                    className={ active === 'next_7' ? 'active' : undefined }
                    data-testid='next_7'
                >
                <div
                    data-testid='next_7-action' 
                    aria-label='Show Tasks For The Next 7 Days'
                    role='button'
                    tabIndex={0}
                    onClick={() => {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }}
                    onKeyDown={() => {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }}
                >
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    <span>Next 7 days</span>
                </div>
            </li>
            </ul>
            <div 
                className='sidebar__middle'
                aria-label='Show/Hide Projects'
                role='button'
                tabIndex={0}
                onClick={() => setShowProjects(!showProjects)}
                onKeyDown={() => setShowProjects(!showProjects)}
            >
                <span><
                    FaChevronDown className={showProjects ? undefined : 'hidden-projects'} />
                </span>
                <h2>Projects</h2>
            </div>
            <ul className='sidebar__projects'>
                {showProjects && <Projects />}
            </ul>
            {showProjects && <AddProject />}
        </div>
    );
}