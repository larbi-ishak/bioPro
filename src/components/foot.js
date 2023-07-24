import {
  createStyles,
  Title,
  Container,
  rem,
} from '@mantine/core';
import { ContactIcons} from './contactIcons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.md,
  },

  header: {
    height: rem(400),
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${
      theme.colors.teal[4]
    } 100%)`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'relative',
    padding: `calc(${theme.spacing.xs} * 1.5) calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.lg,
    marginBottom: theme.spacing.lg,

    [theme.fn.smallerThan(1080)]: {
      height: 'auto',
      flexDirection: 'column-reverse',
      alignItems: 'initial',
      padding: theme.spacing.xl,
    },
  },

  title: {
    color: theme.white,
    position: 'relative',
    zIndex: 1,
    fontSize: rem(46),
    fontWeight: 800,
    letterSpacing: rem(-0.5),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan(1080)]: {
      fontSize: rem(22),
      textAlign: 'center',
      marginTop: theme.spacing.xl,
    },
  },

  titleOverlay: {
    zIndex: 0,
    position: 'absolute',
    color: theme.white,
    fontWeight: 900,
    opacity: 0.1,
    fontSize: rem(320),
    lineHeight: 1,
    top: rem(10),
    left: rem(32),
    pointerEvents: 'none',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan(1080)]: {
      display: 'none',
    },
  },

  contact: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    backgroundColor: theme.white,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.md,

    [theme.fn.smallerThan(1080)]: {
      padding: theme.spacing.xl,
    },
  },

  contactTitle: {
    color: theme.black,
    marginBottom: theme.spacing.xl,
    lineHeight: 1,
  },

}));


export function FaqWithHeader() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.header}>
        <Title className={classes.title}>INTERNATIONALAMB&copy;</Title>
        <Title className={classes.titleOverlay} role="presentation">
          AMB
        </Title>

        <div className={classes.contact} style={{marginLeft: "20px"}}>
         <ContactIcons />
        </div>
      </div>
    </Container>
  );
}