export interface NavigationProps {
  navigate: <T>(value: string, params?: T) => void
  goBack: () => void
}
