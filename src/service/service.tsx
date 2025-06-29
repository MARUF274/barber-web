import { createSignal } from "solid-js";
// import { environment } from "../confiq/config";
// import { datas_terriroy } from "../shared/dummy/territory-dummy";

// import { environment } from "../config/config";
// import { DATA_DECIMAL, DUMMY_CAROUSEL, DUMMY_STATISTICS_SEVERTIY } from "../shared/dummy/dummy-kpi-trend";
// import { data_map_gis,data_dummy_gis_nop ,data_dummy_worst, data_map_gis_detail, data_regional_dis_details} from "../shared/dummy/dummy_atlas";
import store from "../store/store";
import { environment } from "../config/config";
import { DUMMY_MAP_STATUS, data_map_gis, data_marker_gis, test } from "../page/dummy/dummy_atlas";
import { data_dummy_detail_ticket, data_dummy_home_piechart, data_dummy_monitoring, dummy_avail, dummy_detail_ticket, dummy_detail_ticket_broadcast_history, dummy_detailCRM, dummy_incident_tabular, DUMMY_SID, dummy_ttprogress } from "../page/dummy/dummy_incident_tabular";
import { data_dummy_homepage_barchart, data_dummy_homepage_piechart, data_dummy_report_piechart, dummy_alarm_new, dummy_service_status, dummy_sid_summary, dummy_topo_data, dummy_ttstatus } from "../page/dummy/dummy_homepage";
import { data_dummy_broadcast, data_dummy_sidlist, data_topology_dummy } from "../page/dummy/dummy_broadcast";
import { dummy_barchart } from "../page/dummy/dummy-home-page";
import { DUMMY_TEST_TOPOLOGY_1000112278, DUMMY_TEST_TOPOLOGY_1000185963, DUMMY_TEST_TOPOLOGY_111201002915, dummy_catalogue, dummy_current_monitoring, dummy_sid_alarm, dummy_sid_detail } from "../page/dummy/dummy-serv-catalogue";


const apiUrl = environment.baseApiUrlMiddleware;
// const apiUrl2 = environment.baseApiUrlTeritory;
// const apiUrl3 = environment.baseApiUrlSrcipt;

export const _testService = async (
  // start_date: string,
  // end_date: string,
  // type: string,
  // granularity: string,
  // territory: string,
  // level: string,
  // selected_territory = [] as any,
  // kei_category: string
) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  // const url = `${apiUrl}/ftr-alldata`;
  const url = `${apiUrl}`;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // start_date: start_date,
      // end_date: end_date,
      // type: type,
      // granularity: granularity,
      // territory: territory,
      // level: "regional",
      // selected_territory: selected_territory,
      // kei_category: kei_category
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      console.log("error masee", err);
      let a = test;
      setData(a);
      console.log(err);
    });
  return data();
};

export const _keiMapGisREG = async (
  start_date: string,
  end_date: string,
  type: string,
  granularity: string,
  territory: string,
  level: string,
  selected_territory = [] as any,
  kei_category: string
) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  // const url = `${apiUrl}/ftr-alldata`;
  const url = `${apiUrl}/kei_map`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      type: type,
      granularity: granularity,
      territory: territory,
      level: "regional",
      selected_territory: selected_territory,
      kei_category: kei_category
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      let dummyresponse = data_marker_gis;
      setData(dummyresponse);
      console.log(err);
    });
  return data();
};

export const _gis_view_incident = async (
  // start_date: string,
  // end_date: string,
  // severity: string,
  // ne_name: string,
) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/gis_ne_node`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // start_date: start_date,
      // end_date: end_date,
      // severity: severity,
      // ne_name: ne_name,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      // let dummyresponse = data_marker_gis;
      // setData(dummyresponse);
      console.log(err);
    });
  return data();
};

export const _IncidentTabular = async (
  start_date: string,
  end_date: string,
  // type: string,
  // granularity: string,
  // territory: string,
  // level: string,
  // selected_territory = [] as any,
  // kei_category: string
) => {
  const [dataInc, setDataInc] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/get_initial_alarm_incident`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      // type: type,
      // granularity: granularity,
      // territory: territory,
      // level: "regional",
      // selected_territory: selected_territory,
      // kei_category: kei_category
    }),
  })
    .then((res) => res.json())
    .then((dataInc) => {
      setDataInc(dataInc);
    })
    .catch((err) => {
      // let dummyresponseInc = dummy_incident_tabular;
      // setDataInc(dummyresponseInc);
      console.log(err);
    });
  return dataInc();
}


export const _MonitoringTabular = async (
  start_date: string,
  end_date: string,
  sid: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/service_monitoring`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      sid: ""
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data monitoring from service", dataTM);
    })
    .catch((err) => {
      let dummyresponseMonitoring = data_dummy_monitoring;
      setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _MonitoringDetailTT = async (
  start_date: string,
  end_date: string,
  area: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/service_monitoring`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      area: area
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data monitoring from service", dataTM);
    })
    .catch((err) => {
      let dummyresponseMonitoring = data_dummy_monitoring;
      setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _MonitoringTicketlist = async (
  start_date: string,
  end_date: string,
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/incident_monitoring`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,

    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data monitoring from service", dataTM);
    })
    .catch((err) => {
      // let dummyresponseMonitoring = data_dummy_monitoring;
      // setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _AvailTrends = async (
  sid: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/availability_trends`;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data availability from service", dataTM);
    })
    .catch((err) => {
      let dummyresponseMonitoring = dummy_avail;
      setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}


export const _MTDYTD = async (
  mode: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/mtd_ytd?mode=${mode}`;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data MTD YTD", dataTM);
    })
    .catch((err) => {
      let dummyresponseMonitoring = dummy_avail;
      setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _Performance = async (
  sid: string,
  performance_event: string,
  date: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/performance`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sid: sid,
      performance_event: performance_event,
      date: date
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data performance from service", dataTM);
    })
    .catch((err) => {
      //  let dummyresponseMonitoring = dummy_avail;
      //  setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _PerformanceNew = async (
  sid: string,
  event_type: string,
  date: string,
  hour: number
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/block_performance`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "start_date":date, 
      "hour_range":hour, 
      "sid":sid, 
      "event_type":event_type 
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data performance from service", dataTM);
    })
    .catch((err) => {
      //  let dummyresponseMonitoring = dummy_avail;
      //  setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _PerformanceSecond = async (
  sid: string,
  date: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/second_performance`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sid: sid,
      event_type: date
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data performance from service", dataTM);
    })
    .catch((err) => {
      //  let dummyresponseMonitoring = dummy_avail;
      //  setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _PerformanceSecondNew = async (
  sid: string,
  event_type: string,
  date: string,
  hour: number
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/second_performance`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "start_date":date, 
      "hour_range":hour, 
      "sid":sid, 
      "event_type":event_type 
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data performance from service new", dataTM);
    })
    .catch((err) => {
      //  let dummyresponseMonitoring = dummy_avail;
      //  setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}


export const _LOGIN = async (
  username: string,
  password: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/login`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data availability from service", dataTM);
    })
    .catch((err) => {
      let dummyresponseMonitoring = dummy_avail;
      setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _SIDTrends = async (
  sid: string,
  // alarm:string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/sid_impact`;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((dataTM) => {
      if(dataTM == ""){
        console.log("data sid impacted from service none");
        setDataTM(DUMMY_SID);

      }else{
        setDataTM(dataTM);
      }
    })
    .catch((err) => {
      let dummyresponseMonitoring = DUMMY_SID;
      setDataTM(dummyresponseMonitoring);
      console.log("data sid error",err);
    });
  return dataTM();
}

export const _SID_Detai_trand = async (
  area: string,
  // alarm:string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/incident_detail_trend`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      area: area,
      //  alarm:alarm
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
      console.log("data sid impacted from service", dataTM);
    })
    .catch((err) => {
      let dummyresponseMonitoring = DUMMY_SID;
      setDataTM(dummyresponseMonitoring);
      console.log(err);
    });
  return dataTM();
}

export const _getImpcatedSiteList = async (
  sid: string
) => {
  const [dataTM, setDataTM] = createSignal();
  const [errorInc, setErrorInc] = createSignal();
  const url = `${apiUrl}/impacted_list`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sid: sid
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataTM(dataTM);
    })
    .catch((err) => {
      console.log(err);
    });
  return dataTM();
}

// http://10.14.4.191/api/down_count_percentage
export const _getDataHomePiechart = async (
  start_date: string,
  end_date: string,

) => {
  const [dataHomePie, setDataHomePie] = createSignal();
  const [errorHomePie, setErrorHomePie] = createSignal();

  const url = `${apiUrl}/down_count_percentage`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,

    }),
  })
    .then((res) => res.json())
    .then((dataHomePie) => {
      console.log("datas home pie", dataHomePie)
      setDataHomePie(dataHomePie);
    })
    .catch((err) => {
      let dummyresponsePieChart = data_dummy_home_piechart;
      setDataHomePie(dummyresponsePieChart);
      console.log(err);
    });

  // setDataHomePie(data_dummy_homepage_piechart);
  return dataHomePie();
}

export const _getDataHomeBarchart = async (
  // start_date: string,
  // end_date: string,

) => {
  const [dataHomeBar, setDataHomeBar] = createSignal();
  const [errorHomeBar, setErrorHomeBar] = createSignal();
  const url = `${apiUrl}/incident_last_five_days`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: "",
      end_date: "",
    }),
  })
    .then((res) => res.json())
    .then((params) => {
      setDataHomeBar(params);
    })
    .catch((err) => {
      // let dummyRespone = data_dummy_homepage_barchart;
      // setDataHomeBar(dummyRespone);
      console.log("barchart service", err);
      // console.log("dummy responese barchart service", dummyRespone);
    });

  // setDataHomeBar(data_dummy_homepage_barchart);
  return dataHomeBar();
}

export const _BroadcastTabular = async (
  start_date: string,
  end_date: string,
  ticket_category: string,
  // type: string,
  // granularity: string,
  // territory: string,
  // level: string,
  // selected_territory = [] as any,
  // kei_category: string
) => {
  const [dataBroadcast, setDataBroadcast] = createSignal();
  const [errorBroadcast, setErrorBroadcast] = createSignal();
  const url = `${apiUrl}/broadcast`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      ticket_category: ticket_category,
      // granularity: granularity,
      // territory: territory,
      // level: "regional",
      // selected_territory: selected_territory,
      // kei_category: kei_category
    }),
  })
    .then((res) => res.json())
    .then((params) => {
      setDataBroadcast(params);
    })
    .catch((err) => {
      // let dummyresponseBroadcast = data_dummy_broadcast;
      // setDataBroadcast(dummyresponseBroadcast);
      console.log(err);
    });
  return dataBroadcast();
}

export const _getSidTabular = async (
  end_date: string,
  start_date: string,
  sid: string
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/service_catalog`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      end_date: end_date,
      start_date: start_date,
      sid: sid
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
      console.log("data catalog from service", dataTM);
    })
    .catch((err) => {
      // let dummy = dummy_catalogue;
      // setData(dummy)
      console.log(err);
    });
  return Data();
}

// http://10.14.4.191/api/mtm_trends
export const _getMOM = async (
  end_date: string,
  start_date: string,
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/mtm_trends`;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
      console.log("data M2M from service", dataTM);
    })
    .catch((err) => {
      // let dummy = dummy_catalogue;
      // setData(dummy)
      console.log(err);
    });
  return Data();
}

export const _getSIDTopology = async (
  sid: string
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const sidTopology = store.sid_topology();
  let endpoint = "topology"; // Default endpoint

  console.log("sid topologya", sidTopology);


  console.log("sid topology endpoint", endpoint);
  const url = `${apiUrl}/${endpoint}`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sid: sid
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
      console.log("topology", dataTM);
    })
    .catch((err) => {
      setData(dummy_topo_data)
      console.log(err);
      // console.log("topology err", dummy);
    });
  return Data();
}

export const _getSidDetail = async (
  start_date: string,
  end_date: string,
  sid: string
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/sid_detail`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      sid: sid
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
    })
    .catch((err) => {
      let dummy = dummy_sid_detail;
      setData(dummy)
      console.log(err);
    });
  return Data();
}

export const _getYTD = async (
  start_date: string,
  end_date: string,
  // sid: string
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/current_monitoring_by_class`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      // sid: sid
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
    })
    .catch((err) => {
      // let dummy = dummy_current_monitoring;
      // setData(dummy)
      console.log(err);
    });
  return Data();
}

export const _getMonthCondition = async (
  start_date: string,
  end_date: string,
  // sid: string
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/current_monitoring_by_sid`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      // sid: sid
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
    })
    .catch((err) => {
      // let dummy = dummy_current_monitoring;
      // setData(dummy)
      console.log(err);
    });
  return Data();
}

export const _getSidAlarm = async (
  start_date: string,
  end_date: string,
  sid: string
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/sid_alarm_list`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      sid: sid
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
    })
    .catch((err) => {
      let dummy = dummy_sid_alarm;
      setData(dummy)
      console.log(err);
    });
  return Data();
}


// http://10.14.4.191/api/active_alarm_list

export const _getActiveAlarm = async (
  start_date: string,
  end_date: string,
  sid: string
) => {
  const [Data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/active_alarm_list`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sid: "" 
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setData(dataTM);
    })
    .catch((err) => {
      let dummy = dummy_sid_alarm;
      setData(dummy)
      console.log(err);
    });
  return Data();
}

export const testService = async (
  start_date: string,
  end_date: string,

) => {
  const [dataBroadcast, setDataBroadcast] = createSignal();
  const [errorBroadcast, setErrorBroadcast] = createSignal();
  const url = `${apiUrl}/monitoring_tabular`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataBroadcast(dataTM);
    })
    .catch((err) => {
      let dummyresponseBroadcast = data_topology_dummy;
      setDataBroadcast(dummyresponseBroadcast);
      console.log(err);
    });
  return dataBroadcast();
}

export const _getHomeTTStatus = async (
  start_date: string,
  end_date: string,

) => {
  const [dataBroadcast, setDataBroadcast] = createSignal();
  const [errorBroadcast, setErrorBroadcast] = createSignal();
  const url = `${apiUrl}/ticket_sev_count`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataBroadcast(dataTM);
    })
    .catch((err) => {
      let dummyresponseBroadcast = dummy_ttstatus;
      setDataBroadcast(dummyresponseBroadcast);
      console.log(err);
    });
  return dataBroadcast();
  // setDataBroadcast(dummy_ttstatus);
  // return dataBroadcast();
}

export const _getHomeServiceStatus = async (
  start_date: string,
  end_date: string,

) => {
  const [dataServiceStatus, setDataServiceStatus] = createSignal();
  const [errorBroadcast, setErrorBroadcast] = createSignal();
  const url = `${apiUrl}/fault_count`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
    }),
  })
    .then((res) => res.json())
    .then((params) => {
      setDataServiceStatus(params);
    })
    .catch((err) => {
      let dummy = dummy_service_status;
      setDataServiceStatus(dummy);
      console.log(err);
    });
  return dataServiceStatus();
  // setDataServiceStatus(dummy_service_status);
  // return dataServiceStatus();
}


export const _getNewAlarm = async (
) => {
  const [dataAlarmHome, setDataAlarmHome] = createSignal();
  const [errorBroadcast, setErrorBroadcast] = createSignal();
  const url = `${apiUrl}/new_alarm`;
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((params) => {
      let dummy = dummy_alarm_new;

      // setDataAlarmHome(dummy);
      setDataAlarmHome(params);

      console.log("data alarm service", params);
    })
    .catch((err) => {
      let dummy = dummy_alarm_new;
      setDataAlarmHome(dummy);
    });
  return dataAlarmHome();
  // setDataServiceStatus(dummy_service_status);
  // return dataServiceStatus();
}

export const _getMonitoringDetailTT = async (
  start_date: string,
  end_date: string,
  area: string,

) => {
  const [dataMonitoringDetailTT, setDataMonitoringDetailTT] = createSignal();
  const [errorBroadcast, setErrorBroadcast] = createSignal();
  const url = `${apiUrl}/incident_detail`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      area: area
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataMonitoringDetailTT(dataTM);
    })
    .catch((err) => {
      let dummyresponseBroadcast = dummy_ttstatus;
      setDataMonitoringDetailTT(dummyresponseBroadcast);
      console.log(err);
    });
  return dataMonitoringDetailTT();
  // setDataMonitoringDetailTT(dummy_detail_ticket);
  // return dataMonitoringDetailTT();
}

export const _getMonitoringDetailCRM = async (
  area: string,

) => {
  const [dataMonitoringDetailTT, setDataMonitoringDetailTT] = createSignal();
  const [errorBroadcast, setErrorBroadcast] = createSignal();
  const url = `${apiUrl}/crm_detail`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      area: area
    }),
  })
    .then((res) => res.json())
    .then((dataTM) => {
      setDataMonitoringDetailTT(dataTM);
    })
    .catch((err) => {
      let dummyresponseBroadcast = dummy_ttstatus;
      setDataMonitoringDetailTT(dummyresponseBroadcast);
      console.log(err);
    });
  return dataMonitoringDetailTT();
  // setDataMonitoringDetailTT(dummy_detail_ticket);
  // return dataMonitoringDetailTT();
}

export const _getMonitoringTTProgress = async (
  tt_number: string,

) => {
  const [data, setdata] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/ticket_progress`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tt_number: tt_number,
    }),
  })
    .then((res) => res.json())
    .then((params) => {
      setdata(params);
    })
    .catch((err) => {
      // let dummyresponseBroadcast = dummy_ttstatus;
      // setdata(dummyresponseBroadcast);
      console.log(err);
    });
  return data();
  // setdata(dummy_ttprogress);
  // return data();
}


export const _getMonitoringTTList = async (
  start_date: string,
  end_date: string,

) => {
  const [data, setdata] = createSignal();
  const [error, setError] = createSignal();
  // const url = `${apiUrl}/monitoring_tabular`;
  // await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     start_date: start_date,
  //     end_date: end_date,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((dataTM) => {
  //     setDataBroadcast(dataTM);
  //   })
  //   .catch((err) => {
  //     let dummyresponseBroadcast = dummy_ttstatus;
  //     setDataBroadcast(dummyresponseBroadcast);
  //     console.log(err);
  //   });
  // return dataBroadcast();
  setdata(dummy_ttprogress);
  return data();
}

export const _getTrailBER = async (
  start_date: string,
  end_date: string,

) => {
  const [data, setdata] = createSignal();
  const [error, setError] = createSignal();
  // const url = `${apiUrl}/monitoring_tabular`;
  // await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     start_date: start_date,
  //     end_date: end_date,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((dataTM) => {
  //     setDataBroadcast(dataTM);
  //   })
  //   .catch((err) => {
  //     let dummyresponseBroadcast = dummy_ttstatus;
  //     setDataBroadcast(dummyresponseBroadcast);
  //     console.log(err);
  //   });
  // return dataBroadcast();
  setdata(dummy_ttprogress);
  return data();
}

export const _getSIDsummary = async (
  start_date: string,
  end_date: string,

) => {
  const [data, setdata] = createSignal();
  const [error, setError] = createSignal();
  // const url = `${apiUrl}/monitoring_tabular`;
  // await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     start_date: start_date,
  //     end_date: end_date,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((params) => {
  //     setdata(params);
  //   })
  //   .catch((err) => {
  //     let dummyresponseBroadcast = dummy_sid_summary;
  //     setdata(dummyresponseBroadcast);
  //     console.log(err);
  //   });
  // return data();
  setdata(dummy_sid_summary);
  return data();
}

export const _getDetailCRM = async (
  start_date: string,
  end_date: string,

) => {
  const [data, setdata] = createSignal();
  const [error, setError] = createSignal();
  // const url = `${apiUrl}/monitoring_tabular`;
  // await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     start_date: start_date,
  //     end_date: end_date,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((params) => {
  //     setdata(params);
  //   })
  //   .catch((err) => {
  //     let dummyresponseBroadcast = dummy_sid_summary;
  //     setdata(dummyresponseBroadcast);
  //     console.log(err);
  //   });
  // return data();
  setdata(dummy_detailCRM);
  return data();
}

export const _getReportPiechart = async (
  start_date: string,
  end_date: string,

) => {
  const [dataHomePie, setDataHomePie] = createSignal();
  const [errorHomePie, setErrorHomePie] = createSignal();

  // const url = `${apiUrl}/home_piechart`;
  // await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     start_date: start_date,
  //     end_date: end_date,

  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((dataHomePie) => {
  //     setDataHomePie(dataHomePie);
  //   })
  //   .catch((err) => {
  let dummyresponsePieChart = data_dummy_home_piechart;
  //     setDataHomePie(dummyresponsePieChart);
  //     console.log(err);
  //   });

  setDataHomePie(data_dummy_report_piechart);
  return dataHomePie();
}

export const _getBroadcastDetail = async (
  tt_number: string

) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();

  const url = `${apiUrl}/ticket_history`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tt_number: tt_number

    }),
  })
    .then((res) => res.json())
    .then((params) => {
      setData(params);
    })
    .catch((err) => {
      let dymmyresponse = dummy_detail_ticket_broadcast_history;
      setData(dymmyresponse);
      console.log(err);
    });

  return data();
}


export const _gisMarker = async (
  sid: string,
  service_status: string
) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/gis_ne_node`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sid: sid,
      service_status: service_status
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      const dummy_marker_test = [
        {
            "latsource": -7.4303327,
            "latsink": 110.40907,
            "lngsource": 110.56567,
            "lngsink": -7.157113,
            "ne_sink": "GITET UNGARAN OSN 2 2-B1PL1D-12",
            "ne_source": "GITET AMPEL 7-B1PL1D-4",
            "service_status": "UP",
            "severity": null,
            "sid": "111201003037",

        },
    ]
      setData(dummy_marker_test);
      console.log(err);
    });
  return data();
};


export const _IncSeverityDist = async (
  start_date: string,
  end_date: string,
  rc_name: string,
  severity: string,
  ne_name: string,
) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/incident_severity_dist`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      rc_name: rc_name,
      severity: severity,
      ne_name: ne_name,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      // let dummyresponse = data_marker_gis;
      // setData(dummyresponse);
      console.log(err);
    });
  return data();
};

// service_status_by_rootcause
export const _ServStatRC = async (
  start_date: string,
  end_date: string,
  rc_name: string,
  fault_name: string,
) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/service_status_by_rootcause`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      rc_name: rc_name,
      fault_name: fault_name,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      // let dummyresponse = data_marker_gis;
      // setData(dummyresponse);
      console.log(err);
    });
  return data();
};

export const _TopFive = async (
  start_date: string,
  end_date: string,
  fault_name: string,
  rc_name: string,
) => {
  const [data, setData] = createSignal();
  const [error, setError] = createSignal();
  const url = `${apiUrl}/top_worst`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start_date: start_date,
      end_date: end_date,
      fault_name: fault_name,
      rc_name: rc_name,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      // let dummyresponse = data_marker_gis;
      // setData(dummyresponse);
      console.log(err);
    });
  return data();
};