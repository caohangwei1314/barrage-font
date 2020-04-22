import {
    ALTER_DEFAULT_SWITCH_ON,
    ALTER_USER_TOKEN
} from './mutations-type'

export default {
    [ALTER_DEFAULT_SWITCH_ON] (state, value) {
        state.switchOn = value
    },
    [ALTER_USER_TOKEN] (state, value) {
        state.token = value
    }
}
