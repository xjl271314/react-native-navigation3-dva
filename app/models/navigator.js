import { createAction, Storage } from '../utils'
import { StackActions, NavigationActions } from 'react-navigation';
import RootStack from '../navigation'

export default {
    namespace: 'navigator',
    state: {

    },
    reducers: {

    },
    effects: {
        *navigate({ payload }, { call, select, put }) {
            const router = yield select(state => state.router)
            console.log(router)
            // const routeName = payload.routeName
            // const params = payload.params
            // const routes = .routes
            // const currentKey = routes.length ? routes[routes.length - 1].key : ''
        }
    },
    subscriptions: {

    },
}
