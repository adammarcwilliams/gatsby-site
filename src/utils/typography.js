import Typography from 'typography'
import elkGlenTheme from 'typography-theme-elk-glen'
elkGlenTheme.bodyColor = 'white'
elkGlenTheme.headerColor = 'white'
elkGlenTheme.overrideStyles = () => ({ 
    'a': {
        textDecoration: 'none',
        textShadow: 'none'
    }
})

const typography = new Typography(elkGlenTheme)

export default typography