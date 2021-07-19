import colors from '../../styles/colors'

export const useTheme = () => {
  const getColorFromTheme = (theme, intensity = 900) => {
    const color = colors[theme]
    if (color) return color[intensity]
    return colors.green[intensity]
  }
  return { getColorFromTheme }
}
