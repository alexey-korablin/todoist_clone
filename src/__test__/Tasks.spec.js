import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Tasks } from '../components/Tasks';
import { useSelectedProjectValue } from '../context';

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(),
    useProjectsValue: jest.fn(() => ({
        projects: [
            {
                name: 'Book',
                docId: '6WfPrcp9W9lqpREWOjcd',
                projectId: '-Kd6_kVT------------',
                userId: 't5MyE8PUN2'
            },
            {
                docId: "BkrVNyCkVc4rHirjoRfA",
                name: "Video",
                projectId: "-KfjzoWG------------",
                userId: "t5MyE8PUN2"
            },
            {
                docId: "rJ4cqOd4Ckrq58ljIDQV",
                name: "Music",
                projectId: "1",
                userId: "t5MyE8PUN2"
            }
        ]
    }))
}));

jest.mock('../hooks', () => ({
    useTasks: () => ({
        tasks: [
            {
                archived: false,
                date: "",
                id: "DtnKjOprtCvYzzVJSwTv",
                projectId: "-KfjzoWG------------",
                task: "Watch the video",
                userId: "t5MyE8PUN2"
            }
        ]
    })
}));

beforeEach(cleanup);

describe('<Tasks />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('render tasks', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => 'INBOX'),
            selectedProject: 'INBOX'
        }));
        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Inbox');
    });

    it('renders a task with a project title', () => {
        useSelectedProjectValue.mockImplementation(() => ({
            setSelectedProject: jest.fn(() => '1'),
            selectedProject: '1'
        }));

        const { queryByTestId } = render(<Tasks />);
        expect(queryByTestId('tasks')).toBeTruthy();
        expect(queryByTestId('project-name').textContent).toBe('Music');
    });
});