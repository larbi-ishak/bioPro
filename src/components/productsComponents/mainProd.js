import {
  Card,
  Text,
  Group,
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


export function BadgeCard({ image, title, desc,  price, comprimes,category,id }) {
  const { classes, theme } = useStyles();


  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section >
        <Image src={image} alt={title} height={300}  style={{objectFit: "contain"}} width={300} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" style={{color:  `${theme.colors.teal[9]}`}}>{category.toString()}</Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {desc}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={7} mt={5}>
            <Badge style={{color:  `${theme.colors.teal[9]}`}}>
                {price} DA
            </Badge>
            <Badge style={{color:  `${theme.colors.teal[9]}`}}>
                <Text>
                {comprimes}
                </Text>
            </Badge>
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1, backgroundColor: `${theme.colors.teal[9]}` }} >
            <Link href={`/products/${id}`} style={{textDecoration: "none", color: "white"}}>
          Details et Commande
</Link>
        </Button>
      </Group>
    </Card>
  );
}