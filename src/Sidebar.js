import React from 'react';
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography,TextField,Grid,Card, CardMedia, CardContent, CardActionArea,} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import logo from './logo.jpeg';
import IMAGES from './images/imagesFun.js';

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
              backgroundColor: '#fefae0',
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px',borderRadius:10 }} />
          <Typography variant="h6" noWrap component="div" sx={{color: '#283618'}}>
            TechWander
          </Typography>
          </Box>
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
      <Main open={open} sx={{ backgroundColor: 'white'}}>
        <Toolbar />
        
         <Typography variant="h4" sx={{ textAlign: 'center', 
          marginBottom: 6,fontWeight:'bold',
          backgroundColor:'#ccd5ae',borderRadius:10,
          color:'#',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          
          marginTop:0
           }}>
            Videos
        </Typography>
      
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{borderRadius:10,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px','&:hover': { boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',cursor:'pointer'}}}>
            <CardActionArea href="https://youtu.be/RT5fgigTKSM" target="_blank">
              <CardMedia
                component="img"
                image={IMAGES.img2}
                alt="Item 1"
              />
              <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:16,textAlign:'center'}}>
              Oneplus Nord CE 4 is here - A New Competitor ! and A mid-range flagship?
              oneplus nord ce 4 | oneplus nord ce 4 review.This video is all about the oneplus nord CE 4 mobile review.
            </Typography>
          </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{borderRadius:10, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px','&:hover': { boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',cursor:'pointer'}}}>
              <CardActionArea href="https://youtu.be/qVG-y2V8zaM" target="_blank">
              <CardMedia
                component="img"
                image={IMAGES.img1}
                alt="Item 2"
              />
              <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:16,textAlign:'center'}}>
              In this video im gonna show you some Top 5 lastest and must try features in Android14
Android 15 developer preview.
            </Typography>
          </CardContent>
              </CardActionArea>
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              '&:hover': { boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',cursor:'pointer'},
              borderRadius:10
              }}>
               <CardActionArea href="https://youtu.be/JOy6NDPIGb0" target="_blank">
              <CardMedia
                component="img"
                image={IMAGES.img3}
                alt="Item 3"
              />
              <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:16,textAlign:'center'}}>
              Today we are reviewing the all new OPPO Find X7 Ultra. OPPO Find X7 Ultra packs Quad 50MP camera setup with world's first dual periscope cameras, 120Hz Curved AMOLED Screen, Snapdragon 8 Gen 3 & More 
            </Typography>
          </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{borderRadius:10,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px','&:hover': { boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',cursor:'pointer'}}}>
              <CardMedia
                component="img"
                image={IMAGES.img4}
                alt="Item 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{borderRadius:10,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px','&:hover': { boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',cursor:'pointer'}}}>
              <CardMedia
                component="img"
                image={IMAGES.img5}
                alt="Item 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{borderRadius:10,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px','&:hover': { boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',cursor:'pointer'}}}>
              <CardMedia
                component="img"
                image={IMAGES.img6}
                alt="Item 1"
              />
            </Card>
          </Grid>
        </Grid>
      </Main>

    </Box>
    </ThemeProvider>
  );
}
