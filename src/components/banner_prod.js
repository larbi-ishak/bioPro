import { Center, Title, createStyles, rem } from '@mantine/core';
import Image from "next/image"

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginTop: "10px",
    paddingTop: rem(100),
    paddingBottom: rem(100),
    backgroundColor: "#5f594f",
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
    fontSize: rem(20),
    letterSpacing: rem(-1),
    color: theme.white,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(16),
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
    justifyContent: "center",
    alignItems: "center"
  },
  IconWrapper: {
    color: "white",
    textAlign: "center",
  },
  Icon:{
    broderRadius: "50%",
    [theme.fn.smallerThan('sm')]: {
      width:"100px",
      height:"100px",
    },
  },
  IconText:{
    marginTop: "-35px",
    [theme.fn.smallerThan('sm')]: {
      marginTop: "-15px",
      fontWeight:"400",
      fontSize: "12px"
    },
    fontWeight:"700"
  },
  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export default function BannerProd() {
  const { classes} = useStyles();

  return (
    <div className={classes.wrapper}>

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Center>
            LA MAJORITÉ DE NOS PRODUITS SONT
          </Center>
        </Title>

        <div className={classes.IconsContainer}>
          <div className={classes.IconWrapper}>
            <div ><Image className={classes.Icon} src={"/feature1.png"} width={200} height={200} /></div>
            <p className={classes.IconText}>SANS PRODUITS LAITIERS </p>
          </div>
          <div className={classes.IconWrapper}>
            <div ><Image className={classes.Icon} src={"/feature2.png"} width={200} height={200} /></div>
            <p className={classes.IconText}>VÉGÉTALIEN</p>
          </div>
          <div className={classes.IconWrapper}>
            <div ><Image className={classes.Icon} src={"/feature3.png"} width={200} height={200} /></div>
            <p className={classes.IconText}>SANS GLUTEN </p>
          </div>
          <div className={classes.IconWrapper}>
            <div ><Image className={classes.Icon} src={"/feature4.png"} width={200} height={200} /></div>
            <p className={classes.IconText}>SANS OGM </p>
          </div>
          <div className={classes.IconWrapper}>
            <div ><Image className={classes.Icon} src={"/feature5.png"} width={200} height={200} /></div>
            <p className={classes.IconText}>HALAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
