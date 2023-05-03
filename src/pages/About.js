import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:"center",
        p:4,
        "& h4":{
          fontWeight:"bold ",
          my:2,
          fontSize:'2rem',
          "& p":{
            textAlign:'justify'
          },
          "@media(max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem"
            }
          }
        }
      }}>
        <Typography variant="h4">Welcom To My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime
          debitis. Repellat illo, veniam vel, dolorum atque delectus esse magnam
          alias quia voluptatem, quo aliquid eum enim dolor nobis odio incidunt
          in inventore eos soluta officia! Numquam neque, obcaecati qui sequi
          ipsa iste, vel, odio voluptatibus quasi non labore! Accusamus harum
          facere eveniet corporis est commodi explicabo distinctio illum totam
          reiciendis ullam numquam ea aut, aspernatur ducimus. Nam molestiae,
          similique possimus cum nisi quisquam corrupti hic a minus animi atque
          quidem, eligendi, reprehenderit minima iste amet ab aliquid aperiam
          sapiente qui doloribus odio. Delectus nihil, voluptatem odit cum
          laudantium dolorem.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quam debitis nesciunt aspernatur tempore tenetur rem hic cupiditate
          dolor, rerum perspiciatis odit, voluptate consequuntur sequi dolorem?
          Nobis iusto rerum, similique eos dignissimos laudantium repellat
          minima voluptatem eveniet temporibus minus tempora, repellendus
          nostrum eaque cumque nulla explicabo nesciunt consectetur porro! Vitae
          debitis nobis, sed reiciendis, porro nulla voluptate nihil voluptates
          unde adipisci eum maiores ex consequuntur delectus at tempore vel
          pariatur in? Consequuntur ipsum ut in iste numquam dolorum accusantium
          possimus minus maiores nemo dolores alias, voluptas unde harum placeat
          eum quod cupiditate magnam dolor officia quibusdam voluptatem qui
          blanditiis ratione.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
