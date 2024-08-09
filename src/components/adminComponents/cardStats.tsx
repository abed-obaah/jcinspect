import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';

const otherSetting = {
  height: 400,
  grid: { horizontal: true },
  barGap: 0,  // Overlaps the bars
  barCategoryGap: 0,  // Overlaps the bars even if they belong to different categories
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoulViewed: 21,
    seoulApplied: 50,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoulViewed: 28,
    seoulApplied: 60,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoulViewed: 41,
    seoulApplied: 70,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoulViewed: 73,
    seoulApplied: 90,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoulViewed: 99,
    seoulApplied: 120,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoulViewed: 144,
    seoulApplied: 180,
    month: 'Jun',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoulViewed: 319,
    seoulApplied: 350,
    month: 'Jul',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoulViewed: 249,
    seoulApplied: 280,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoulViewed: 131,
    seoulApplied: 150,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoulViewed: 55,
    seoulApplied: 70,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoulViewed: 48,
    seoulApplied: 65,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoulViewed: 25,
    seoulApplied: 45,
    month: 'Dec',
  },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export default function Example() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow mt-10">
      <div className="px-4 py-5 sm:p-6">
        <BarChart
          dataset={dataset}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'month',
            },
          ]}
          series={[
            {
              dataKey: 'seoulViewed',
              label: 'Jobs Viewed',
              valueFormatter,
              color: '#1f77b4', // Blue color for "Jobs Viewed"
            },
            {
              dataKey: 'seoulApplied',
              label: 'Jobs Applied',
              valueFormatter,
              color: '#ff7f0e', // Orange color for "Jobs Applied"
            },
          ]}
          {...otherSetting}
        />
      </div>
    </div>
  );
}
