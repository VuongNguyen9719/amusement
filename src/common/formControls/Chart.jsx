import React, { useRef ,useEffect} from 'react';
import PropTypes from 'prop-types';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = props => {

    const chartRef = useRef();

    return (
        <HighchartsReact
            highcharts={Highcharts}
            // options={...props}
            ref={chartRef}
        />
    );
};

Chart.propTypes = {
    
};

export default Chart;