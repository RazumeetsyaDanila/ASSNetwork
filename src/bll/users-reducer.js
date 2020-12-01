const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";


let initializeState = {
    users: [
        {id: 0, followed: false, username: "Danilas", avatar: null},
        {id: 1, followed: false, username: "Tresk", avatar: null},
        {id: 2, followed: false, username: "TheMan", avatar: null},
    ]
}

const usersReducer = (state = initializeState, action) => {
    //взрыв мозга:
    //делаем поверхностную копию объекта state,
    //затем глубокую копию тех подобъектов, которые будем менять и присваиваем им новые значения
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});

export default usersReducer;