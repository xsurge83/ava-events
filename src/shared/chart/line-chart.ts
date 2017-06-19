import * as d3 from 'd3';

interface Margin {
  top: number; right: number; bottom: number; left: number
}

interface LineConfig {
  target: string | Element;
  width: number;
  height: number;
  margin: Margin;
  axis: boolean;
  xTicks: number;
  yRange: [number, number];
  xDomain: [number, number];
  pointWidth: number;
  ease: string;
  // timeFormat:
}

const defaults: LineConfig = {
  // target element or selector to contain the svg
  target: '#chart',

  // width of chart
  width: 550,

  // height of chart
  height: 175,

  // margin
  margin: {top: 25, right: 60, bottom: 50, left: 60},

  // axis enabled
  axis: true,

  // x axis tick count
  xTicks: 6,

  // y range (opacity)
  yRange: [0, 1],

  // x domain (time)
  xDomain: [],

  // time formatter
  // timeFormat:  d3.time.format("%B %d %I:%M %p"),

  // value formatter
  // valueFormat: d3.format('0,000'),

  // custom point width
  pointWidth: null,

  // easing function for transitions
  ease: 'linear'
};

class LineChart {
  public chart: d3.Selection<d3.BaseType, any, HTMLElement, any>;
  public config: LineConfig;

  constructor(config: LineConfig) {
    this.config = {...defaults, ...config};
    this.init();
  }

  private init() {
    const {target, width, height, margin} = this.config;
    const {axis, xTicks, yRange} = this.config;
    const [w, h] = this.dimensions();

    this.chart = d3.select(target as Element)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
  }

  private dimensions() {
    const {width, height, margin} = this.config;
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;
    return [w, h]
  }
}
