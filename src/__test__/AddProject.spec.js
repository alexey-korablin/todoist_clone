import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { AddProject } from '../components/AddProject';
import { useProjectsValue } from '../context';
import { generatePushId } from '../helpers'

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

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve('I am resolved'))
            }))
        }))
    }
}));

beforeEach(cleanup);

describe('<AddProject />', () => {
    describe('success', () => {
        it('renders <AddProject />', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();
        });

        it('renders <AddProject /> and adds a project', () => {
            const { queryByTestId } = render(<AddProject shouldShow />);
            expect(queryByTestId('add-project')).toBeTruthy();

            fireEvent.change(queryByTestId('project-name'), {
                target: { value: 'Best project in the world!' }
            });
            expect(queryByTestId('project-name').value).toBe('Best project in the world!');
        });
    })
})