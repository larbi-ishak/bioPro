import {
    createStyles,
    Table,
    Container,
    Accordion,
    ThemeIcon,
    MantineProvider,
    getStylesRef,
  } from '@mantine/core';
  import { IconPlus } from '@tabler/icons-react';
import { TableScrollArea } from './inPordTable';
import { TableScrollAr } from "@/src/components/productsComponents/inTable";

  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: "15px",
      paddingBottom: "15px",
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${
      theme.colors.teal[4]
    } 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
      color: theme.black,
    },
  
    item: {
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      overflow: 'hidden',
    },
  
    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
      color: theme.black,
  
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  
    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },
  
    icon: {
      ref: getStylesRef('icon'),
      marginLeft: theme.spacing.md,
    },
  
    gradient: {
    backgroundImage: `linear-gradient(135deg, ${theme.colors.teal[9]} 0%, ${
      theme.colors.teal[4]
    } 100%)`,
    },
  
    itemOpened: {
      [`& .${getStylesRef('icon')}`]: {
        transform: 'rotate(45deg)',
      },
    },
  
    button: {
      display: 'block',
      marginTop: theme.spacing.md,
  
      [theme.fn.smallerThan('sm')]: {
        display: 'block',
        width: '100%',
      },
    },
  }));
  
  const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';
  
  export function FaqWithBg({data}) {
    const { classes } = useStyles();
  const {composantes, indications,image, utilisation}=data
    return (
      <MantineProvider inherit theme={{ colorScheme: 'light' }}>
        <div className={classes.wrapper}>
          <Container size="sm">
            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              chevronSize={50}
              variant="separated"
              disableChevronRotation
              chevron={
                <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                  <IconPlus size="1.05rem" stroke={1.5} />
                </ThemeIcon>
              }
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control style={{fontWeight: 'bold'}}>Les composantes actives</Accordion.Control>
                <Accordion.Panel> <TableScrollArea data={composantes} /> </Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control style={{fontWeight: 'bold'}}>Indications</Accordion.Control>
                <Accordion.Panel>
                  <TableScrollAr data={indications} />
              </Accordion.Panel>
              </Accordion.Item>
  

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control style={{fontWeight: 'bold'}}>Mode d'emploi</Accordion.Control>
                <Accordion.Panel>1 par jour</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control style={{fontWeight: 'bold'}}>utilisation</Accordion.Control>
                <Accordion.Panel>
                  <Table >
                    <tbody>
                      <tr >
                          <td>{utilisation}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="payment">
                <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </MantineProvider>
    );
  }