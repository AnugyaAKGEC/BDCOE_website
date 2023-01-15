import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { getList } from './getlist';
import { borders } from '@mui/system';
import { CardMedia } from '@mui/material';
import {Typography} from '@mui/material';
import { CardContent } from '@mui/material';
import {Card} from '@mui/material';
import {CardActionArea} from '@mui/material';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



import WebFont from 'webfontloader';
import './Team.css';

import SocialFollow from "./SocialFollow"

import Card1 from "./Card";


const Team = () => {
  const [state, setState] = useState(" ");
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items.data)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div>
      <div className="heading">
        <h1>Team</h1>
      </div>
      {/* <div>
        <div className="container">
          <select className="custom-select" onChange={(e) => {
            const selectedstate = e.target.value;
            setstate(selectedstate);
          }}>
            <option value="all"> </option>  
            <option value="2nd year">2nd year</option>
            <option value="3rd year">3rd year</option>
            <option value="4th year">4th year</option>
         </select>
        </div>

      </div> */}
  <div className="btn">
   {["All Team" ,"4th Year","3rd Year","2nd Year"].map((sclass) => {
    return  <button className="button" key={sclass} value={sclass} onClick={(e)=> {
      const selectedstate = e.target.value;
      setState(selectedstate);
    }}>{sclass}</button>
   }) 
   }
  </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }} columns={{ xs: 12, sm: 1, md: 12 }}>
         {list.filter((check) => {
          if (state == "4th Year"){
            return check.graduation == "2023"
          }
          else if (state == "3rd Year"){
            return check.graduation == "2024"
          }
          else if (state == "2nd Year"){
            return check.graduation == "2025"
          }
          else 
          {
            return 1
          }
         }).map((item)=>(
          <Grid item xs={6} s={6}  md={3}>
          
          <Card style={{ width: 250, height:300, margin:38 }}>
               <CardActionArea>
                
                 <CardMedia className="abc"
                   alt="team BDCOE"
                   component="img"
                   title={item.fullname}
                   style = {{
                    height: 190,
                    width : 239,
                    margin:5,

                  }}
                   image={item.imageUrl}
                 />
                
                 <SocialFollow className="def" item = {item}
                 
                  />
                 
                <CardContent>
                  
                  
                   <Typography gutterBottom variant="h5" component="h2">
                    
                   {item.fullname}
                   
                   </Typography>
                   <Typography variant="body2" 
                               color="textSecondary" 
                               component="p">
                     {item.domain}
                   </Typography>
                   
                   

                 </CardContent>
               </CardActionArea>
               </Card>
               
            </Grid>
        ))}
        
        </Grid>
      </Box>

     <div className="end"><h3> Creativity Inspires Our Implementation</h3>
        <p class="end1">We at BDCOE, are a passionate group of people, working towards bringing a change in the ecosystem of development. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture.</p>
      </div> 


    </div>


  )
}

export default Team  
