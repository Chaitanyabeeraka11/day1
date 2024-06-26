import React from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography,TextField,Grid, Paper, Card, CardMedia,} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const customTheme = createTheme({
  typography: {
    fontFamily: 'Times New Roman, serif',
  },
});
export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getIconForIndex = (index) => {
    switch (index) {
      case 0:
        return <CottageOutlinedIcon />;
      case 1:
        return <TipsAndUpdatesOutlinedIcon />;
      case 2:
        return <SubscriptionsOutlinedIcon />;
      case 3:
        return <SendOutlinedIcon  />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <CssBaseline />
      <AppBar
  position="fixed"
  open={open}
  sx={{
    margin: '0 4px',
    borderRadius: 12,
    height: '60px',
    background: 'hsla(74, 32%, 76%, 1)',
    background: 'linear-gradient(90deg, hsla(74, 32%, 76%, 1) 0%, hsla(43, 82%, 89%, 1) 100%)',
    background: '-moz-linear-gradient(90deg, hsla(74, 32%, 76%, 1) 0%, hsla(43, 82%, 89%, 1) 100%)',
    background: '-webkit-linear-gradient(90deg, hsla(74, 32%, 76%, 1) 0%, hsla(43, 82%, 89%, 1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#CCD5AE", endColorstr="#FAEDCD", GradientType=1)',
  }}
>        <Toolbar>
          <IconButton
            color="#283618"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color: '#283618'}}>
            TechWander
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <TextField
  variant="standard"
  placeholder="Search..."
  size="small"
  InputProps={{
    disableUnderline: true,
    sx: {
      backgroundColor: '#fff',
      borderRadius: '20px', // More rounded corners
      paddingLeft: 2,
      paddingRight: 2,
      color: '#000', // Ensure text color is readable
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)', // Add shadow effect
    },
  }}
  sx={{
    mr: 2,
    '& .MuiInputBase-root': {
      border: '1px solid #ccc', // Add border
      '&:hover': {
        border: '1px solid #aaa', // Darker border on hover
      },
    },
  }}
/>
          <Button color="inherit" sx = {{backgroundColor: '#606c38', color: 'white',borderRadius:12,boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px'}}>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#606c38',
            color: '#ffffff'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Typography variant="h6" sx={{ textAlign: 'center', padding: theme.spacing(3), textShadow: '2px 4px 8px rgba(0, 0, 0, 0.83)',fontFamily:'sans-serif'}}>
          MENU
        </Typography>
        <Divider />
        <List>
          {['Home', 'News', 'Youtube', 'Connect'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {getIconForIndex(index)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      
      <DrawerHeader />
      <Main open={open} sx={{ backgroundColor: '#edf2f4' }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="day1/images/android features 2024.jpg"
                alt="Item 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="/day1/images/oneplus_nord_ce4.jpg"
                alt="Item 2"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="/day1/images/oppo_find.jpg"
                alt="Item 3"
              />
            </Card>
          </Grid>
        </Grid>
      </Main>

    </Box>
    </ThemeProvider>
  );
}
