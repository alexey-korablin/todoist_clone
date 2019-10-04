import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';

beforeEach(cleanup);

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: jest.fn()
                }))
            }))
        }))
    }
}));

describe('Checkbox', () => {
    describe('Success', () => {
        it('renders the task checkbox', () => {
            const { queryByTestId, debug } = render(
                <Checkbox id='1' taskDesc='Finish the tutorial series!' />
            );
            // debug();
            expect(queryByTestId('checkbox-action')).toBeTruthy();
        });
    });
});