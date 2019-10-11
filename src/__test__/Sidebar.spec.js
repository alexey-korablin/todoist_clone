import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Sidebar } from '../components/layout/Sidebar';

beforeEach(cleanup);

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({
        setSelectedProject: jest.fn(() => 'INBOX')
    })),
    useProjectsValue: jest.fn(() => ({ 
        projects: [
            {
                name: 'Book',
                docId: '6WfPrcp9W9lqpREWOjcd',
                projectId: '-Kd6_kVT------------',
                userId: 't5MyE8PUN2'
            }
        ],
        setProjects: jest.fn() }))
}));

describe('<Sidebar />', () => {
    describe('Success', () => {
        it('renders the sidebar component', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();
        });

        it('changes the activate project to inbox in collated tasks', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();
            fireEvent.click(queryByTestId('inbox-action'));
            fireEvent.keyDown(queryByTestId('inbox-action'));

            expect(queryByTestId('inbox').classList.contains('active')).toBeTruthy();
            expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
        });

        it('changes the activate project to today in collated tasks', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();
            fireEvent.click(queryByTestId('today-action'));
            fireEvent.keyDown(queryByTestId('today-action'));

            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('today').classList.contains('active')).toBeTruthy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeFalsy();
        });

        it('changes the activate project to next week in collated tasks', () => {
            const { queryByTestId } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();
            fireEvent.click(queryByTestId('next_7-action'));
            fireEvent.keyDown(queryByTestId('next_7-action'));

            expect(queryByTestId('inbox').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('today').classList.contains('active')).toBeFalsy();
            expect(queryByTestId('next_7').classList.contains('active')).toBeTruthy();
        });

        it('hides and shows the sidebar projects using onClick', () => {
            const { queryByTestId, queryByText, getByText } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.click(getByText('Projects'));
            expect(queryByText('Add Project')).toBeFalsy();

            fireEvent.click(getByText('Projects'));
            expect(queryByText('Add Project')).toBeTruthy();
        });

        it('hides and shows the sidebar projects using onKeyDown', () => {
            const { queryByTestId, queryByText, getByText } = render(<Sidebar />);
            expect(queryByTestId('sidebar')).toBeTruthy();

            fireEvent.keyDown(getByText('Projects'));
            expect(queryByText('Add Project')).toBeFalsy();

            fireEvent.keyDown(getByText('Projects'));
            expect(queryByText('Add Project')).toBeTruthy();
        });
    })
});