import { createStyles } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({

  wrapper: {
    display: "flex",
    margin: "40px 40px",
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
          Nos sites de fabrication repondent aux normes de production et exigencs mondiales, certifees BFP(Bonnes Pratiques DE Fabrication) . Ils ont soumis regulirement a des inspection par les autorites de sante. Savoir-faire, experience, qualitie, reactivite, sont a la base de ces resultats rapides et exemplaires
        </p>
      </div>
      <div className={classes.imgWrapper}>
        <Image className={classes.Image} src="/bbb.jpg" width={400} height={250} alt="justimge" />

      </div>

    </div>
  </section>;
};

export default Intro;


