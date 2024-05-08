import { Title, createStyles, rem } from '@mantine/core';
import Image from "next/image"

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginTop: "10px",
    paddingTop: rem(100),
    paddingBottom: rem(100),
    backgroundColor: theme.colors.teal[7],
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

  IconsContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px 70px"
  },
  IconWrapper: {


  },
  Icon:{
    backgroundColor: "white",
    border: "1px solid white",
    broderRadius: "50%",
  },
  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export default function Banner() {
  const { classes} = useStyles();

  return (
    <div className={classes.wrapper}>

      <div className={classes.inner}>
        <Title className={classes.title}>
          Vos besoins
        </Title>

        <div className={classes.IconsContainer}>
          <div className={classes.IconWrapper}>
            <div className={classes.Icon}><Image src={"/icon4.png"} width={250} height={250} /></div>
            <p>besoin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
