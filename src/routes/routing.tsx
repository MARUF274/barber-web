import { Component, Show, createEffect, lazy } from 'solid-js';
import { Router, Route, Navigate, HashRouter, useNavigate } from '@solidjs/router';
import ComproContainer from './routing_container';
import { HopeProvider, HopeThemeConfig } from '@hope-ui/solid';
// import TabularPage from '../page/tab/tabular';
// import LoginPage from '../page/login/login';
// import MapTransport from '../page/map-transport/map-transport';
// import homePage from '../page/home-page/homepage';
// import TabularView from '../page/tabular-view/tabular-view';
// import Barchart from '../page/home-page/chart/bar-chart';
// import DonutChart from '../page/home-page/chart/donut-chart';
// import GisDashboard from '../page/gis-dashboard/gis-dashboard';
// import BCSlide from '../page/detail-ticket/partial/bc-slide/bc-slide';
// import Broadcast from '../page/broadcast/broadcast';
// import TTHistorySlide from '../page/detail-ticket/partial/tthistory-slide/tthistory-slide';
// import BBEChart from '../page/detail-ticket/partial/bbe-chart/bbe-chart';
// import BroadcastDetail from '../page/broadcast/broadcast-detail/broadcast-detail';
// import SidList from '../page/sid-list/sid-list';
// import SidTopology from '../page/sid-topology/sid-topology';
// import ReportPage from '../page/report/report';
// import BarchartHorizontal from '../page/report/component/top-five';
// import ServiceStatus from '../page/report/component/srv-status';
// import CreateTicket from '../page/sid-topology/page/create-ticket';
// import Gis_icon_plus from '../page/home/partial/Gis_icon_plus';
// import ServStatus from '../page/service-status/service-status';
// import SIDTopo from '../page/service-status/component/sid-topo';
// import ServiceMonitoring from '../page/service-monitoring/service-monitoring';
import store from '../store/store';
import Homepage from '../page/main/homepage';
import Profile from '../page/profile/homepage';
import Service from '../page/service/homepage';
import Testimoni from '../page/testimoni/homepage';
// import SIDDetailComponent from '../page/service-status/component/sid-detail';
// import Topology from '../page/sid-topology/component/topology';
// import Tabular from '../page/tabular-page';
// import Home from '../page/home/home';

const KpiPathFn: Component = () => {
  const pathFn = () => {
    return '/homepage'
  }
  return <>
    <Navigate href={pathFn} />
  </>
}

const Root: Component = () => {


  // function TTHistorySlide(props: RouteSectionProps<unknown>): Element {
  //   throw new Error('Function not implemented.');
  // }

  function AuthGuard({ component: Component }: any) {
    const navigate = useNavigate();

    // Effect to check token
    createEffect(() => {
      const token = store.token();
      // const token = "aaa"
      const currentPath = window.location.hash;

      // Jika token undefined dan bukan halaman login, lempar ke login

      // if (!token && currentPath !== "#/login") {
      //   // navigate("/login", { replace: true });
      // }

    });
    return <Component />;
  }

  return (
    <>
      <HopeProvider>
        {/* <SidenavNewWrapper /> */}
        <HashRouter root={ComproContainer}>
          {/* <Routes> */}
          <Route path="/" component={Homepage} />
          <Route path="/profile" component={Profile} />
          <Route path="/service" component={Service} />

          <Route path="/testimoni" component={() => <AuthGuard component={Testimoni} />} />
          {/* <Route path="/topo" component={Topology} /> */}
          {/* <Route path="/map-kpi" component={mapPage} /> */}
          {/* <Route path="*404" component={notFound} /> */}
          {/* </Routes> */}
        </HashRouter>
      </HopeProvider>
    </>
  )
}
export default Root;
