import { VALIDATION_ACTIONS } from './types';

export const validationActions = (estado) => {
    return {
        type: VALIDATION_ACTIONS,
        payload: estado
    }
};
