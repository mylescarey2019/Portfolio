import React, { Component } from 'react';
// import HeroImg2 from './workspace2.jpg';
import HeroImg from './workspace.jpg';
import HeadLine from '../HeadLine';
import PortfolioSection from '../PortfolioSection'
import Hero from '../Hero'
import './style.css';

class Main extends Component {

  render() {
    return (
      <section id="content-wrapper">
        <div id="header">This is the Header Row
          <div className="col-lg-12">
            {/* <a href="#" id="sidebar-toggle" className="navbar-brand"><i className="fa fa-bars"
               onClick={ (e) => this.props.onClickSideNav(e)}></i>
            </a> */}
            <button id="sidebar-toggle" className="navbar-brand"><i className="fa fa-bars"
               onClick={ (e) => this.props.onClickSideNav(e)}></i>
            </button>
          </div>
        </div>
        <div className="row main-section " onClick={ () => this.props.onClickMain()}>
          <div className="col-lg-12">
            {/* <div id="hero">
              <img className="img-fluid" src={HeroImg} alt={"hero"}/>
            </div> */}
            <Hero heroimg={HeroImg} />
            <PortfolioSection id="about">
              <HeadLine title={'About Section'} />
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
            </PortfolioSection>
            <PortfolioSection id="skills">
              <HeadLine title={'Skills Section'} />
              {/* The next play is to define a Skills component and rende it here */}
              {/* Skills will be passed a prop that is an array of skill objects */}
              {/* The skill object prop will be mapped over to render the component */}
              {/* skill for each of the skills */}
              {/* There will be 2 or 3 seperate Skills components rendered here */}
              {/* One for Client Side, One for Server Side and one for Other (maybe) */}
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
            </PortfolioSection>
            <PortfolioSection id="projects" >
              <HeadLine title={'Projects Section'} />
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
            </PortfolioSection>
            <PortfolioSection id="education">
              <HeadLine title={'Education Section'} />
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
            </PortfolioSection>
            <PortfolioSection id="experience">
              <HeadLine title={'Experience Section'} />
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
            </PortfolioSection>
            <PortfolioSection id="contact">
              <HeadLine title={'Contact Section'} />
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              </PortfolioSection>
            <PortfolioSection id="resume">
              <HeadLine title={'Resume Section'} />
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              <p>Voluptate magna est in aliqua ullamco velit et dolor sint nulla laborum deserunt nisi. Pariatur esse ex sint elit fugiat sit consectetur laboris labore veniam eu proident. Adipisicing anim do cupidatat aliqua magna. Fugiat velit voluptate magna proident voluptate eu quis.</p>
              </PortfolioSection>
          </div>
        </div>
      </section>
    )
  } 
}
export default Main;