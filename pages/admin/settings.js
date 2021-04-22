import React from "react";
import MouseParticles from 'react-mouse-particles';


// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  return (
    <>
      <MouseParticles
        g={1}
        color='random'
        cull='MuiSvgIcon-root,MuiButton-root'
        level={6}
      />
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-8/12 px-4'>
          <CardSettings />
        </div>
        <div className='w-full lg:w-4/12 px-4'>
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
