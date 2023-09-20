import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import NewsItem from './NewsItem';
import { Box, Typography } from "@mui/material";

const News = () => {
    const [news,setNews]=useState([]);
    async function fetchNews() {
        let response = await axios(
          `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=2637b1dde1f74f1d811fee2fe118b46b`
        );
        let user = await response.data;
        setNews(user);
      }
    useEffect(() => {
         fetchNews()
      }, []);

  return (
    <>
        <Box marginRight={0} marginTop={4} width={"100%"}>
      <Typography
        margin={"auto"}
        variant="h4"
        padding={2}
        width="40%"
        color="white"
        textAlign={"center"}
        borderRadius={"1%"}
        fontFamily={"Georgia, 'Times New Roman', Times, serif"}
        fontWeight={"bolder"}
      >
        <span style={{color:"rgba(231, 59, 59, 0.92)"}}>Latest </span>Crypto News
      </Typography>
         <Box
        width={"100%"}
        marginLeft="3.4%"
        marginTop={5}
        display={"flex"}
        justifyContent="flex-start"
        flexWrap={"wrap"}
      >
        {news.articles &&
          news.articles.map((val) => (
            <a href={val.url} style={{textDecoration:"none"}}>
            <NewsItem
              title={val.title}
              description={val.description}
              posterUrl={val.urlToImage}
              link={val.url}
              content={val.content}
            />
            </a>
          ))}
          </Box>
          </Box>
    </>
  )
}

export default News