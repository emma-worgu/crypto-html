Highcharts.theme = {
    "colors": [
        "rgba(132, 184, 235, 0.7)",
        "rgba(46, 204, 113, 0.7)",
        "rgba(155, 89, 182, 0.7)",
        "rgba(231, 76, 60, 0.7)",
        "rgba(52, 73, 94, 0.7)",
        "rgba(241, 196, 15, 0.7)",
        "rgba(26, 188, 156, 0.7)",
        "rgba(243, 156, 18, 0.7)",
        "rgba(211, 84, 0, 0.7)"],
    "chart": {
        "backgroundColor": "#F7FaFb"
    },
    "xAxis": {
        "gridLineDashStyle": "Dash",
        "gridLineWidth": 1,
        "gridLineColor": "#BDC3C7",
        "lineColor": "#BDC3C7",
        "minorGridLineColor": "#BDC3C7",
        "tickColor": "#BDC3C7",
        "tickWidth": 1
    },
    "yAxis": {
        "gridLineDashStyle": "Dash",
        "gridLineColor": "#BDC3C7",
        "lineColor": "#BDC3C7",
        "minorGridLineColor": "#BDC3C7",
        "tickColor": "#BDC3C7",
        "tickWidth": 1
    },
    "legendBackgroundColor": "rgba(0, 0, 0, 0.5)",
    "background2": "#505053",
    "dataLabelsColor": "#B0B0B3",
    "textColor": "#34495e",
    "contrastTextColor": "#F0F0F3",
    "maskColor": "rgba(255,255,255,0.3)"
}
const langs = {
    lang: {
        loading: _t("Loading..."),
        rangeSelectorZoom: _t("Zoom"),
        rangeSelectorFrom: _t("From"),
        rangeSelectorTo: _t("To"),
        months: [
            _t('January'), _t('February'), _t('March'), _t('April'), _t('May'), _t('June'),
            _t('July'), _t('August'), _t('September'), _t('October'), _t('November'), _t('December'),
        ],
        shortMonths: [
            _t('Jan.'), _t('Feb.'), _t('Mar.'), _t('Apr.'), _t('May.'), _t('Jun.'),
            _t('Jul.'), _t('Aug.'), _t('Sep.'), _t('Oct.'), _t('Nov.'), _t('Dec.'),
        ],
        weekdays: [
            _t('Sunday'), _t('Monday'), _t('Tuesday'), _t('Wednesday'),
            _t('Thursday'), _t('Friday'), _t('Saturday'),
        ],
    }
}

Highcharts.setOptions(Highcharts.theme);
Highcharts.setOptions(langs);