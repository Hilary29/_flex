"use client";

import React from 'react';
import TopHeader from './TopHeader';

const TopNavbar: React.FC = () => {
  const contentArray: string[] = [
    'We are launching a promo on all our trainings from 1st FEBUARY to 13th FEBUARY',
    'FIRST SEMESTER EVALUATION FOR DQP STUDENTS STARTS ON FEBUARY 3TH 2025',
    'ALL DQP students should compile all their documents before JANUARY 1ST',
    'We are launching a new training program nextweek MONDAY 20TH JANUARY ',
    'We are developping a new training system nextweek THURSDAY 25TH JANUARY ',
    'We are DESIGNING a new CAMEROON SYSTEM nextweek MARCH 14 2025',
  ];

  return (
    <div>

      <div> 
          <TopHeader content={contentArray} />
           
      </div>
    </div>
  );
};

export default TopNavbar;
