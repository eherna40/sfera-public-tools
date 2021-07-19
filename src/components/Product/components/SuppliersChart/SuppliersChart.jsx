import React, { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const SuppliersChart = () => {
  const [active, setActive] = useState(null)

  const data = [
    { name: 'FEDEFARMA', color: 'tw-text-secondary', value: 40, number: '50' },
    { name: 'COFARES', color: 'tw-text-primary', value: 10, number: '18' },
    { name: 'SERTEC', color: 'tw-text-success', value: 10, number: '15' },
    { name: 'TESTING', color: 'tw-text-alert', value: 10, number: '10' },
    { name: 'PRUEBA 4', color: 'tw-text-warning', value: 10, number: '5' },
  ]
  const COLORS = ['#3FCBD9', '#22949B', '#71D875', '#D8004D', '#FFB500']
  return (
    <ResponsiveContainer>
      <div className="tw-relative tw-flex tw-flex-col tw-items-center">
        <PieChart width={350} height={150}>
          <Pie
            data={data}
            startAngle={180}
            cx="50%"
            cy="100%"
            endAngle={0}
            innerRadius={75}
            outerRadius={110}
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                onMouseEnter={() => setActive(entry)}
                onMouseLeave={() => setActive(null)}
                key="cell-"
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>

        {active && (
          <div
            className="tw-absolute tw-w-full tw-h-full tw-flex tw-justify-center tw-items-end tw-left-0 tw-top-0"
            style={{ zIndex: -1 }}
          >
            <div className="tw-flex tw-flex-col tw-items-center">
              <div className="tw-flex tw-justify-center tw-items-center">
                <Paragraphs
                  className={`tw-mr-2 ${active.color}`}
                  weight="bold"
                  size="4xl"
                >
                  {active.number}
                </Paragraphs>
                <Paragraphs className={active.color} weight="bold" size="sm">
                  %
                </Paragraphs>
              </div>
              <Paragraphs weight="bold" size="xs">
                {active.name}
              </Paragraphs>
            </div>
          </div>
        )}
      </div>
    </ResponsiveContainer>
  )
}

SuppliersChart.propTypes = {}

export default SuppliersChart
