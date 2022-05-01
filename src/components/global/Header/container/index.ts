export const useInjection = () => {
  // TODO: 実装
  const user = {
    name: 'User1',
  }

  return {
    isAuthenticated: true,
    name: user.name,
  }
}
