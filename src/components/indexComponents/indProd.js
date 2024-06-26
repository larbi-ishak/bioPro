import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(100),
    paddingBottom: rem(100),
    backgroundImage:
      'url(/bbb.jpg)',
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
    marginTop: `calc(${theme.spacing.xl} * 1.9)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  button: {
    color: theme.colors.teal[7],
  },
  control: {
    color: theme.colors.teal[7],
    height: rem(42),
    fontSize: theme.fontSizes.md,

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

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.25} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          NOS PRODUITS
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Petite discription du produits de 2 lignes
            Petite discription du produits de 2 lignes
            Petite discription du produits de 2 lignes
            Petite discription du produits de 2 lignes
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            <Link className={classes.button} target='_blank' href={"https://drive.google.com/drive/folders/11q2MzbE1jRjZFbUea21dzthPXnws0vbj"} style={{textDecoration: "none", backgroundColor: "transparent"}} >Pour Telecharger les Catalogues {">"}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
