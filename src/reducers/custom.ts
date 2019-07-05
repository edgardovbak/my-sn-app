import { User } from '@sensenet/default-content-types';

export default function updateInfo(     
    state: {
        isLoading: boolean, 
        isPassUpdated: boolean,
        loadedUsers: User[],
    } = {
        isLoading: true, 
        isPassUpdated: false,
        loadedUsers: [],
    }, action: any) {

    // load other users info 
    if (action.type === 'LOAD_USERS') {
        return {
            ...state,
            isLoading: true,
        };
    }

    if (action.type === 'LOAD_USERS_SUCCESS') {
        return {
            ...state,
            isLoading: false,
            loadedUsers: action.payload.users
        };
    }   

    if (action.type === 'LOAD_USERS_FAILURE') {
        return {
            ...state,
            isLoading: false,
        };
    }   

    // update current user info
    if (action.type === 'SET_USER_INFO') {
        return  {
            ...state,
            user: {
                ...state,
                FullName :          action.payload.FullName,
                JobTitle: 		    action.payload.JobTitle,
				Languages: 		    action.payload.Languages,
				Phone: 			    action.payload.Phone,
            }
        };
    }

    return state;
}