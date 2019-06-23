import React from 'react';

export default () => {
  return (
    <div className='cv-section'>
      <h3>
        <em>Exp</em>erience
      </h3>

      <div className='cv-experience'>
        <em>
          <p>company</p>
        </em>
        <p>title</p>
        <p>description</p>
        <div className='duration'>
          <p>duration</p>
        </div>
      </div>

      {/* <div className='cv-experience'>
        <em>
          <p>Gonzalez Woodwork</p>
        </em>
        <p>Office Manager</p>
        <p>
          Deployed and maintained a MySQL Database for a small business that
          tracked invoices, resources, and products | Maintained Customer
          Relations using Workforce | Reached out to other businesses and set up
          professional relationships
        </p>
        <div className='duration'>
          <p>December 2008 - May 2017</p>
        </div>
      </div> */}

      {/* <div className='cv-experience'>
        <em>
          <p>Walt Disney World Resort</p>
        </em>
        <p>Cook II</p>
        <p>
          Created Experiences for Guests, Learned how To be part of a team,
          Tested critical thinking and throughput. I am including this because
          it's an experience like no other, and i'm glad to have had the
          opportunity.
        </p>
        <div className='duration'>
          <p>June 2013 - February 2014</p>
        </div>
      </div> */}
    </div>
  );
};
