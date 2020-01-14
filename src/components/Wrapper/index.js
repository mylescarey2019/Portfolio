import React, { Component } from 'react';
import SideNav from './../SideNav'
import Main from './../Main'
import './style.css';

class Wrapper extends Component {
  state = {
    toggleSideNavClass: '',
    scrollSpyOffset: -150
  };

  // // toggle the SideNav state
  // toggleSideNav = (e) => {
  //   e.stopPropagation();
  //   e.nativeEvent.stopPropagation();
  //   console.log('CLICKED a TOGGLE NAV');
  //   if (this.state.toggleSideNavClass)  {
  //     console.log(`you clicked toggle sideNav and it is open so close it`);
  //     // const body = document.body;
  //     // const scrollY = body.style.top;
  //     // body.style.position = '';
  //     // body.style.top = '';
  //     // window.scrollTo(0, parseInt(scrollY || '0') * -1);
  //     this.setState( { toggleSideNavClass: '' } );
  //   } else {
  //     console.log(`you clicked toggle sideNav and it is closed so open it`);
  //     // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  //     // console.log(`Y: ${scrollY}`)
  //     // const body = document.body;
  //     // body.style.top = `-${scrollY}`;
  //     // body.style.position = 'fixed';
  //     this.setState( { toggleSideNavClass: 'toggled' } );
  //   }
  // };

  // Toggle the SideNav open-close  only used on small media query break point
  //toggleSideNavClick = (e) => this.toggleSideNav(e);
  toggleSideNavClick = (e) => {
    e.preventDefault();
    console.log('CLICKED a TOGGLE NAV');
    if (this.state.toggleSideNavClass)  {
      console.log(`you clicked toggle sideNav and it is open so close it`);
      this.setState( { toggleSideNavClass: '' } );
      this.setState( { scrollSpyOffset: 0 } );
    } else {
      console.log(`you clicked toggle sideNav and it is closed so open it`);
      this.setState( { toggleSideNavClass: 'toggled' } );
      this.setState( { scrollSpyOffset: -120 } );
    }
  }

  // Close the SideNav after clicking a Nav Link
  closeSideNavClick = (e) => { 
    //e.preventDefault();
    console.log('CLICKED a NAV Link');
    this.setState( { toggleSideNavClass: '' } ); };

  // if window size is expanded past small breakpoint when SideNav bar is open
  // then close it
  componentDidMount() {
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", () => {
      // console.log(`JELLO: ${window.innerWidth}`);
      if (window.innerWidth > 767) {
        this.setState( { toggleSideNavClass: '' } );
      }
    });

    // window.addEventListener('scroll', () => {
    //   //console.log(`JELLO: ${window.scrollY}`);
    //   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    // });
  };



  render() {
    return (
      <div id="wrapper" className={this.state.toggleSideNavClass}>
        <SideNav onClickSideNav={this.toggleSideNavClick}
                 onClickNavLink={this.closeSideNavClick}
                 scrollSpyOffset={this.state.scrollSpyOffset}/>
        <Main onClickMain={this.closeSideNavClick} onClickSideNav={this.toggleSideNavClick}/>
      </div>
    )
  }
}
export default Wrapper;