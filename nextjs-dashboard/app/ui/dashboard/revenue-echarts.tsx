'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChartsContainer } from '@mui/x-charts/ChartsContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function RevenueChart({
  months,
  revenueData,
}: {
  months: string[];
  revenueData: number[];
}) {

  const [type, setType] = React.useState<'line' | 'bar'>(
    'line'
  );

  return (
    <Box sx={{ width: '100%' }}>

      {/* SWITCH DROPDOWN */}
      <TextField
        select
        value={type}
        onChange={(event) =>
          setType(event.target.value as 'line' | 'bar')
        }
        label="Series Type"
        sx={{
          minWidth: 180,
          mb: 3,
        }}
      >
        <MenuItem value="line">
          Line
        </MenuItem>

        <MenuItem value="bar">
          Bar
        </MenuItem>
      </TextField>

      {/* CHART */}
      <ChartsContainer
        series={[
          {
            type,
            data: revenueData,
            label: 'Revenue',
          },
        ]}
        xAxis={[
          {
            data: months,
            scaleType: 'band',
            id: 'revenue-axis',
            height: 48,
          },
        ]}
        height={350}
      >

        {/* BAR */}
        <BarPlot />

        {/* LINE */}
        <LinePlot />

        {/* X AXIS */}
        <ChartsXAxis
          label="Months"
          axisId="revenue-axis"
        />

      </ChartsContainer>

    </Box>
  );
}