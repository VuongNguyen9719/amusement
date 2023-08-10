import AdditionalServices from '@pages/AdditionalServices'
import EventAndVoucher from '@pages/EventAndVoucher'
import Home from '@pages/Home';
import InfoClient from '@pages/InfoClient'
import Login from '@pages/Login'
import ManageAccount from '@pages/ManageAccount';
import ManageGame from '@pages/ManageGame'
import ManageGameWaterpark from '@pages/ManageGameWaterpark'
import ManageMovieShowtimes from '@pages/ManageMovieShowtimes';
import ManagePermissison from '@pages/ManagePermissison'
import ManagerUser from '@pages/ManagerUser'
import ServicesGame from '@pages/ServicesGame';
import ServicesGameWaterpark from '@pages/ServicesGameWaterpark'
import TheaterManager from '@pages/TheaterManager'
import UpcomingMovie from '@pages/UpcomingMovie';

const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/', component: Home },
    { path: '/manage-movie-showtimes', component: ManageMovieShowtimes },
    { path: '/additional-services', component: AdditionalServices },
    { path: '/event-and-voucher', component: EventAndVoucher },
    { path: '/info-client', component: InfoClient },
    { path: '/manage-account', component: ManageAccount },
    { path: '/manage-game', component: ManageGame },
    { path: '/manage-game-waterpark', component: ManageGameWaterpark },
    { path: '/manage-permissison', component: ManagePermissison },
    { path: '/manage-user', component: ManagerUser },
    { path: '/services-game', component: ServicesGame },
    { path: '/services-game-waterpark', component: ServicesGameWaterpark },
    { path: '/theater-manager', component: TheaterManager },
    { path: '/upcoming-movie', component: UpcomingMovie },
];

const privateRoutes = [];

export {
    publicRoutes, privateRoutes
}