import { createStyles} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  Link: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "15px 40px",
  },
}));

export default function BaseButton({ link, text}) {
  const { classes } = useStyles();

  return (
    <>
    <div style={{marginLeft: "15px", marginTop: "20px"}}>
        <Link className={classes.Link} href={link}>{text}</Link>
</div>
    </>
  );
}
