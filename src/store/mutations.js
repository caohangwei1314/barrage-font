import {
    ALTER_DEFAULT_SWITCH_ON
} from './mutations-type'

export default {
    [ALTER_DEFAULT_SWITCH_ON] (state, value) {
        state.switchOn = value
    }
}
