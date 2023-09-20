import {
    Card,
    CardContent,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const NewsItem = ({ title, description, posterUrl, link, content }) => {
    return (
        
      <Card
        sx={{
          margin: 2,
          width: 250,
          height: 320,
          borderRadius: 5,
          ":hover": {
            boxShadow: "8px 8px 14px #343538dc",
            cursor:"pointer"
          },
          backgroundColor: "#1d1d20ad",
        }}
      >
        <img height={"50%"} width="100%" src={posterUrl} alt={`No preview available`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:"white", fontFamily:"Verdana, Geneva, Tahoma, sans-serif", fontSize:"80%"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:"grey", fontFamily:"Verdana, Geneva, Tahoma, sans-serif", fontSize:"80%",paddingBottom:"2%"}}> 
          {content.length > 50 ?
             `${content.substring(0, 50)}...` : content
          }
          <br/>
          <span style={{color:"white"}}>Click for more>></span>
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default NewsItem;
  