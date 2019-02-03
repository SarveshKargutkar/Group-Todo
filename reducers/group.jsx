const group=(state = '', action) => {
    // console.log("h1")
    switch (action.type) {
        case 'GROUP_NAME':
        return (
            state= action.value
        )
        default:
            return state

    }
}
export default group