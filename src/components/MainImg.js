
import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(300),
    paddingBottom: rem(130),
    backgroundImage: 'url(/AMB.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors.teal[7]
  },

  description: {
    color: theme.colors.gray[4],
    textAlign: 'center',
    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    color: "white",
    height: rem(42),
    lineHeight: rem(42),
    fontSize: theme.fontSizes.md,
    backgroundColor: "transparent",
    border: "1px solid white",

    '&:hover': {
      backgroundColor: "rgb(0, 0, 0, 0.25)"
    },
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

}));

function MainImg() {
  const { classes, cx } = useStyles();

  const ScrollDown = () => {
    window.scrollTo(0, window.scrollY + 300)

  }
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.25} zIndex={1} />

      <div className={classes.inner}>
        <div className={classes.controls}>
          <Button onClick={ScrollDown} className={classes.control} size="lg">
            DECOUVRIR
          </Button>
        </div>
      </div>
    </div>
  );
}
export default MainImg;
