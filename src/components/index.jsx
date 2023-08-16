import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './Layouts';
import { publicRoutes } from '~routes';

const App = props => {
    return (
        <Router>
            <div className='w-[100vw] h-[100vh]'>
                <Routes>
                    {
                        publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout === null) {
                                Layout = Fragment
                            } else if (route.layout) {
                                Layout = route.layout;
                            }
                            const Page = route.component;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                >
                                </Route>
                            )
                        })
                    }
                </Routes>
            </div>
        </Router>
    );
};

App.propTypes = {

};

export default App;