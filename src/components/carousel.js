import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, useMantineTheme, rem } from '@mantine/core';
import BaseButton from './baseButton';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(300),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  CarouselTxtWrapper: {
    marginLeft: "150px",
    marginTop: "60px",
  },
  CarouselText: {
    fontWeight: "1000",
    fontSize: "2rem",
    lineHeight: "32px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: `${theme.colors.teal[9]}`,
  },
  button: {
    lineHeight: "52px",
    marginTop: "20px",
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));


function Card({ image, title}) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div className={classes.CarouselTxtWrapper}>
        <h3 className={classes.CarouselText}>renforcer votre<br />immunité avec newgate</h3>
        <BaseButton link={"/products"} className={classes.button} text={"je découvre"} />
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      '/Carousel1.jpg',
    title: 'Meilleurs Produits Health & Beauty',
  },
  {
    image:
      '/Carousel1.jpg',
    title: 'Meilleurs Produits Health & Beauty',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'xl', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
    >
      {slides}
    </Carousel>
  );
}