export default
{
    setAuth(state, payload)
    {
        state.isLoggeedIn = payload.isAuth;
    }
}