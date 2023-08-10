import React from 'react';

const Loading = ({ mess = 'Loading...' }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[9999]">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-400 opacity-75"></div>
            <div className="absolute z-[10] text-white flex items-center ">
                {mess}
                <div className="w-8 h-8 border-4 border-white rounded-full ml-2 animate-spin">
                    <div className="border-t-4 border-white rounded-full w-6 h-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;