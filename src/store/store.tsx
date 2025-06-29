import { createSignal, onMount } from "solid-js";

interface ListData {
    date: string;
    critical: number;
    major: number;
    minor: number;
    low: number;
    sum: number;
}
interface listDataReg {
    region: string;
    value: any;
}

interface KpiModel {
    // title: string;
    // title_reg:string;
    color: string;
    // data: ListData[];
    name: string;
    // data_reg: listDataReg[]
    type: string,
    label: string,
    value: string
}

export interface INAPTerritoryModel {
    territory: "tsel" | "gov";
    level: number;
    column: string;
    column2: string;
    column3?: string;
    areas: string[];
}

const [paramS, setParamS] = createSignal("");

const [selectedTypeS, setSelectedTypeS] = createSignal<string>("incident");
const [_selectedPerspective, _setSelectedPerspective] = createSignal<string>("Nationalwide");
const [_selectedGranularity, _setSelectedGranularity] = createSignal<string>("Daily");
const [_SelectedSeverity, _setSelectedSeverity] = createSignal<string>("all");
const [_selectedTheme, _setSelectedTheme] = createSignal<string>('dark-theme');
const [_selectedKpi, _setSelectedKpi] = createSignal<KpiModel>({
    // title: 'Number of TT Daily Trend',
    label: "MTTC",
    name: "MTTC",
    // title_reg: 'Number of TT Region Distribution',
    color: '#9FB7FF',
    value: 'mttc',
    // data: DATA_DECIMAL,
    // data_reg: DATA_VALUE_REG,
    type: 'duration'
});
const [_dataRegDistribution, _setDataRegionDistribution] = createSignal()
const [_selectedColor, _setSelectedColor] = createSignal<string>("#7A69EE");
const [_keiRegional, _setKeiRegional] = createSignal(undefined as any);
const [_selectedStartDate, _setSelectedStartDate] = createSignal<string>("2024-07-29");
const [_selectedEndDate, _setSelectedEndDate] = createSignal<string>("2024-07-31");
// const  [_SelecteddefaultTime, _setSelecteddefaultTime] = createSignal<string>("");
// const  [_SelectedsevenDaysAgo, _setSelectedsevenDaysAgo] = createSignal<string>("");

const [_keiCategory, _setKeiCategory] = createSignal<string>("MTTR");
const [_selectedTerritory, _setSelectedTerritory] = createSignal({
    territory: 'nationalwide',
    level: 'nationalwide',
    selected_territory: ['Nationalwide'],
});

const [_selectedTerritorymap, _setSelectedTerritorymap] = createSignal<string[]>([]);
const [_hendleClose, _sethendleClose] = createSignal("")
const [_SelectedTerritorymapdetail, _setSelectedTerritorymapdetail] = createSignal()
const [_SelectedRegioanlDetails, _setSelectedRegioanlDetails] = createSignal()
// const [_SelectedSeverity, _setSeverity] = createSignal("")
const [_SelectedTotalAVG, _setTotalAVG] = createSignal(undefined as any)
const [_slideNum, _setslideNum] = createSignal(0)
const [_luckmap, _setluckmap] = createSignal('roadmap')
const [_isMobile, _setIsMobile] = createSignal(false);
const [gisMode, setGisMode] = createSignal("gis-mode")
const [TTNumberS, setTTNumberS] = createSignal("") as any
const [showPopS, setShowPopS] = createSignal(false)
const [childDetailS, setChildDetailS] = createSignal("")
const [bcIdS, setBcIdS] = createSignal("")
const [topoIdS, setTopoIdS] = createSignal("")
const [userLoginS, setUserLoginS] = createSignal("") as any
const [windowLocationS, setWindowLocationS] = createSignal("") as any
const [DarkModeS, setDarkModeS] = createSignal(true);
const [SidMonitoringS, setSidMonitoringS] = createSignal("0");
const [_token, _settoken] = createSignal(undefined as any);
const [_user_roll, _setuser_roll] = createSignal(undefined as any);
const [date_startS, setdate_startS] = createSignal("") as any
const [date_endS, setdate_endS] = createSignal("") as any
const [paramHideS, setParamHideS] = createSignal(true)
const [_areaMonitoring, _setareaMonitoring] = createSignal("")
const [_start_date_performance, _setstart_date_performance] = createSignal("") as any
const [_sid_topology, _setsid_topology] = createSignal("10000009100391")
const [gisPopUpS, setGisPopUpS] = createSignal(false) as any
const [gisClickS, setGisClickS] = createSignal("") as any
const [countTopo, setCountTopo] = createSignal(0) as any
const [dataNode, setDataNode] = createSignal([] as any)
const [isVisible, setIsVisible] = createSignal(false);
const [statusSID, setStatusSID] = createSignal() as any;
const [ytdData, setYtdData] = createSignal([]) as any;
const [filterGIS, setFilterGIS] = createSignal("")
const [isLoadingAvail, setIsLoadingAvail] = createSignal(true);
const [isLoadingSIDImpact, setIsLoadingSIDImpact] = createSignal(true);

export const [totalDown, setTotalDown] = createSignal(0);
export const [totalNewUp, setTotalNewUp] = createSignal(0);


const store = {
    filterGIS: filterGIS, setFilterGIS: setFilterGIS,
    countTopo: countTopo, setCountTopo: setCountTopo,
    isLoadingAvail: isLoadingAvail, setIsLoadingAvail: setIsLoadingAvail,
    isLoadingSIDImpact: isLoadingSIDImpact, setIsLoadingSIDImpact: setIsLoadingSIDImpact,
    ytdData: ytdData, setYtdData: setYtdData,
    statusSID: statusSID, setStatusSID: setStatusSID,
    isVisible: isVisible, setIsVisible: setIsVisible,
    dataNode :dataNode, setDataNode: setDataNode,
    gisClickS: gisClickS, setGisClickS: setGisClickS,
    gisPopUpS: gisPopUpS, setGisPopUpS: setGisPopUpS,
    paramHideS: paramHideS, setParamHideS: setParamHideS,
    areaMonitoring: _areaMonitoring, setareaMonitoring: _setareaMonitoring,
    sid_topology: _sid_topology, setsid_topology: _setsid_topology,
    start_date_performance: _start_date_performance, setstart_date_performance: _setstart_date_performance,
    date_endS: date_endS, setdate_endS: setdate_endS,
    date_startS: date_startS, setdate_startS: setdate_startS,
    SidMonitoring: SidMonitoringS, setSidMonitoring: setSidMonitoringS,
    DarkMode: DarkModeS, setDarkMode: setDarkModeS,
    token: _token, settoken: _settoken,
    user_roll: _user_roll, setuser_roll: _setuser_roll,
    windowLocation: windowLocationS, setWindowLocation: setWindowLocationS,
    userLogin: userLoginS, setUserLogin: setUserLoginS,
    topoId: topoIdS, setTopoId: setTopoIdS,
    bcId: bcIdS, setBcId: setBcIdS,
    childDetail: childDetailS, setChildDetail: setChildDetailS,
    showPop: showPopS, setShowPop: setShowPopS,
    ttnumber: TTNumberS, setTTNumber: setTTNumberS,
    param: paramS, setParam: setParamS,
    isMobile: _isMobile, setIsMobile: _setIsMobile,
    selectedType: selectedTypeS, setSelectedType: setSelectedTypeS,
    selectedPerspective: _selectedPerspective, setSelectedPerspective: _setSelectedPerspective,
    selectedGranularity: _selectedGranularity, setSelectedGranularity: _setSelectedGranularity,
    selectedTheme: _selectedTheme, setSelectedTheme: _setSelectedTheme,
    selectedKpi: _selectedKpi, setSelectedKpi: _setSelectedKpi,
    selectedColor: _selectedColor, setSelectedColor: _setSelectedColor,
    selectedStartDate: _selectedStartDate, setSelectedStartDate: _setSelectedStartDate,
    selectedEndDate: _selectedEndDate, setSelectedEndDate: _setSelectedEndDate,
    selectedTerritory: _selectedTerritory, setSelectedTerritory: _setSelectedTerritory,
    keiRegional: _keiRegional, setKeiRegional: _setKeiRegional,
    keiCategory: _keiCategory, setKeiCategory: _setKeiCategory,
    selectedTerritorymap: _selectedTerritorymap, setSelectedTerritorymap: _setSelectedTerritorymap,
    SelectedTerritorymapdetail: _SelectedTerritorymapdetail, setSelectedTerritorymapdetail: _setSelectedTerritorymapdetail,
    SelectedRegioanlDetails: _SelectedRegioanlDetails, setSelectedRegioanlDetails: _setSelectedRegioanlDetails,
    SelectedSeverity: _SelectedSeverity, setSelectedSeverity: _setSelectedSeverity,
    SelectedTotalAVG: _SelectedTotalAVG, setTotalAVG: _setTotalAVG,
    slideNum: _slideNum, setslideNum: _setslideNum,
    luckmap: _luckmap, setluckmap: _setluckmap,
    
}

onMount(() => {
    const currentDate = new Date().toISOString().split('T')[0]; // Mendapatkan tanggal saat ini dalam format "YYYY-MM-DD"
    _setSelectedEndDate(currentDate); // Mengatur defaultTime ke tanggal saat ini

    const sevenDaysAgoDate = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // Mendapatkan tanggal 7 hari yang lalu dalam format "YYYY-MM-DD"
    _setSelectedStartDate(sevenDaysAgoDate); // Mengatur sevenDaysAgo ke tanggal 7 hari yang lalu

    console.log('default date', _selectedStartDate());
    console.log('default defaultTime', currentDate);
    console.log('7 days ago', sevenDaysAgoDate);
});

export default store;


