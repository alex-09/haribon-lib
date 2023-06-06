import {createStyles, getBreakpointValue, rem, em} from "@mantine/core"

    const useStyles = createStyles((theme) => ({
        container: {
        height: rem(100),
        backgroundColor: theme.colors.blue[6],
    
        // Media query with value from theme
        [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xl) - 1)})`]: {
            backgroundColor: theme.colors.pink[6],
        },
    
        // Simplify media query writing with theme functions
        [theme.fn.smallerThan('lg')]: {
            backgroundColor: theme.colors.yellow[6],
        },
    
        // Static media query
        [`@media (max-width: ${em(800)})`]: {
            backgroundColor: theme.colors.orange[6],
        },
        },
    }));
function Background() {
    
    const { classes } = useStyles();
    return <div className={classes.container} />;

  
}

export default Background