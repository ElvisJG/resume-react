import React from 'react';

export default props => {
  //   const skills = this.props.data.skills.map(function(skills) {
  //     const className = 'bar-expand ' + skills.name.toLowerCase();
  //     return (
  //       <li key={skills.name}>
  //         <span style={{ width: skills.confidence }} className={className} />
  //         <em>{skills.name}</em>
  //       </li>
  //     );
  //   });

  return (
    <div className='row skill'>
      <div className='three columns header-col'>
        <h2>
          <span>Programming</span>
        </h2>
      </div>

      <div className='nine columns main-col'>
        <div className='bars'>
          <ul className='skills'>skills</ul>
        </div>
      </div>
    </div>
  );
};
