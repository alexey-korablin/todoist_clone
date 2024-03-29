import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Projects } from '../components/Projects';

beforeEach(cleanup);

jest.mock('../context', () => ({
    useSelectedProjectValue: jest.fn(() => ({
        setSelectedProject: jest.fn(() => 'INBOX'),
    })),
    useProjectsValue: jest.fn(() => ({
        projects: [
            {
                name: 'Book',
                docId: '6WfPrcp9W9lqpREWOjcd',
                projectId: '-Kd6_kVT------------',
                userId: 't5MyE8PUN2'
            }
        ]
    }))
}));

describe('<Projects />', () => {
    afterEach(() => jest.clearAllMocks());

    describe('Success', () => {
        it('renders the projects', () => {
            const { queryByTestId } = render(<Projects />);
            expect(queryByTestId('project-action')).toBeTruthy();
        });

        it('renders the projects and selects an active project using onClick', () => {
            const { queryByTestId } = render(<Projects activeValue='1' />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.click(queryByTestId('project-action'));
            expect(queryByTestId('project-action-parents').classList.contains('active'))
                .toBeTruthy()
        });

        it('renders the projects and selects an active project using onKeyDown', () => {
            const { queryByTestId } = render(<Projects activeValue='1' />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.keyDown(queryByTestId('project-action'));
            expect(queryByTestId('project-action-parents').classList.contains('active'))
                .toBeTruthy()
        });

        it('renders the projects with no active value', () => {
            const { queryByTestId } = render(<Projects activeValue='1' />);
            expect(queryByTestId('project-action')).toBeTruthy();

            fireEvent.click(queryByTestId('project-action'));
            expect(queryByTestId('project-action-parents').classList
                .contains('sidebar__project')
            ).toBeTruthy()
        });
    });
});