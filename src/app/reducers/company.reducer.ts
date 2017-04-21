export const LOAD_COMPANIES = 'LOAD_COMPANIES';

export function companyReducer(state = [], action) {
    switch (action.type) {
        case LOAD_COMPANIES:
            return action.payload;
        default:
            return state;
    }
}
