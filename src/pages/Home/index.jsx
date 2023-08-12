import React from 'react';
import PropTypes from 'prop-types';

import Scrollbar from '@formControls/Scrollbar'
import StatisticOverView from './StatisticOverView';
import OverViewMain from './OverViewMain';
import TotalStatisfilm from './TotalStatisFilm';
import TotalStatisGame from './TotalStatisGame';
import TotalStatisWaterPark from './TotalStatisWaterPark';

const Home = props => {
    return (
        <div
            className="p-[20px] flex-1 flex flex-col gap-[20px] content-container"
        >   
            <Scrollbar>
                <StatisticOverView />
                <OverViewMain />
                <TotalStatisfilm />
                <TotalStatisGame />
                <TotalStatisWaterPark />
            </Scrollbar>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;