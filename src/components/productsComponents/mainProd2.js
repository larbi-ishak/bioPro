import {
  Card,
  Text,
  Group,
  Center,
  Badge,
  Button,
  createStyles,
  rem,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));


export function VenteCard({ image, title, desc,  price, comprimes,category,id }) {
  const { classes, theme } = useStyles();


  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section >
        <Center>
          <Image src={image} alt={title} height={250}  style={{objectFit: "contain", marginTop: "15px"}} width={250} />
        </Center>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={800}>
            {title}
          </Text>
        </Group>
        
        <Card.Section style={{marginTop: "3px"}} className={classes.section}>
                  <Text> {comprimes} </Text>
                  <Text fz="lg" fw={800}> {price} DA</Text>
        </Card.Section>
            <Link href={`/products/${id}`} style={{marginTop: "5px",textDecoration: "underline", color: "#937b44"}}>
            Voir le porduit
            </Link>
      </Card.Section>


    </Card>
  );
}