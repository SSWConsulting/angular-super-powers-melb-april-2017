export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';

export function companyReducer(state = [], action) {
    switch (action.type) {
        case LOAD_COMPANIES_SUCCESS:
            return action.payload;
        case DELETE_COMPANY:
            state = state.filter(company => company.id !== action.payload);
            return state;
        default:
            return state;
    }
}
