import { createStyles, Text, SimpleGrid, Container, rem,Group, Badge, Title } from '@mantine/core';

import {IconMessage ,IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.colors.teal[9]
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  Badge: {
    backgroundImage:  `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${ theme.colors.teal[4] } 100%)`
  }
}));



function Feature({ icon: Icon, title, description, className, ...others }) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: 'Livraison à travers le pays',
    description: 'description des services',
  },
  {
    icon: IconMessage,
    title: 'Support client rapide',
    description: 'description des services',
  },
  {
    icon: IconCertificate,
    title: 'Meilleur produit de qualité',
    description: 'description des services',
  },
  {
    icon: IconCoin,
    title: 'Prix ​​très abordable',
    description: 'description des services',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
  const { classes, theme } = useStyles();
  return (
    <Container mt={30} mb={30} size="lg">
<Group position="center">
        <Title order={1} className={classes.title} ta="center" mt="sm">
        INTERNATIONAL AMB
        </Title>
          <Badge variant="filled" size="lg" style={{marginTop: "25px"}} className={classes.Badge}>
            MEILLEURS PRODUITS DE SANTÉ ET DE BEAUTÉ
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
        mini titremini titremini titremini titremini titremini titre
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
         description description description description description description description description 
        </Text>
  
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50} style={{marginTop: "40px"}}>
        {items}
      </SimpleGrid>
    </Container>
  );
}


