import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About-us Ecommerce-app"}>
     <div>
  <section id="page-header" className="about-header">
    <h2>#Know Us</h2>
    <p>Here you know more about muchad and his gang</p>
  </section>
  <section id="about-head" className="section-p1">
    <img src="images/a6.jpg" alt />
    <div>
      <h2>Who We Are?</h2>
      <h3> We Are Muchads</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ut totam temporibus molestiae harum sequi aut cupiditate sint excepturi voluptatibus unde obcaecati quam cum magni dignissimos quae similique voluptatem veritatis, a dolores dolorem natus aspernatur. Amet quae, id nemo quod iusto eius rem? Commodi sequi, explicabo culpa placeat, sint nesciunt itaque in dolores provident voluptate deleniti, nisi ab unde quas ad illum ullam deserunt nulla mollitia eveniet ipsum dolore doloribus enim tenetur. Laboriosam illum laborum non voluptatem eaque recusandae rerum.</p>
      <abbr title>create stuming images with as much of as little control as you like thanks to a choice of basic and creative modes.</abbr>
      <br /><br />
      <marquee bgcolor="#ffff00" loop={-1} scrollamount={8} width="100%">create stuming images with as much of as little control as you like thanks to a choice of basic and creative modes.</marquee>
    </div>
  </section>
  <section id="about-app" className="section-p1">
    <h1>Download Our <a href="#">App</a></h1>
    <div className="video">
      <video autoPlay muted loop src="images/1.mp4" />
    </div>
  </section>
</div>
    </Layout>
  )
}

export default About
