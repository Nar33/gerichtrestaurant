import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Chef’s Word' />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
          Being a chef is about feeding people, which is part of the story of all humanity.
          </p>
        </div>
        
        <br/>
        <p className='p__opensans'>If you are a chef, no matter how good a chef you are, it's not good cooking for yourself; the joy is in cooking for others - it's the same with music.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>

    </div>
  </div>
);

export default Chef;
