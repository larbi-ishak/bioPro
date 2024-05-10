import { createStyles } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({

  wrapper: {
    display: "flex",
    margin: "20px 40px",
    justifyContent: "space-around",
    gap: "30px",

    [theme.fn.smallerThan('xs')]: {
      display: "block",
      margin: "20px 10px"
    },

  },
  text: {
    textAlign: "center",
    margintBottom: "10px"
  },
  imgWrapper: {

  },
  green: {
    color: theme.colors.teal[7]
  },
  Image: {
    borderRadius: "30px",
    border: "1px solid black",
    [theme.fn.smallerThan('xs')]: {
      width: "350px"
    },
  }
}))

const Intro = () => {
  const { classes } = useStyles();
  return <section >
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <h2><span className={classes.green}>AMB</span> INTERNATIONAL</h2>
        <h4>Qui sommes-nous?</h4>
        <p className={classes.content}>
          Nos sites de fabrication répondent aux normes de production et aux exigences mondiales, certifiées BFP ( Bonnes Pratiques De Fabrication ) . Ils sont soumis régulièrement à des inspections par les autorités de santé. Savoir-faire, expérience, qualité, réactivité, sont à la base de ces résultats rapides et exemplaires.
        </p>
      </div>
      <div className={classes.imgWrapper}>
        <Image className={classes.Image} src="/bbb.jpg" width={450} height={280} alt="justimge" />

      </div>

    </div>
  </section>;
};

export default Intro;


