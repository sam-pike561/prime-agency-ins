'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { feature } from 'topojson-client'

const fill = '#8CA87A'
const edge = '#121312'

// Replace these placeholder hubs with real office/agent coordinates before launch.
const hubs = [
  { name: 'Seattle', coordinates: [-122.33, 47.61] },
  { name: 'Los Angeles', coordinates: [-118.24, 34.05] },
  { name: 'Denver', coordinates: [-104.99, 39.74] },
  { name: 'Dallas', coordinates: [-96.8, 32.78] },
  { name: 'Chicago', coordinates: [-87.63, 41.88] },
  { name: 'Atlanta', coordinates: [-84.39, 33.75] },
  { name: 'New York', coordinates: [-74.01, 40.71] },
  { name: 'Miami', coordinates: [-80.19, 25.76] },
]

const links = [
  [0, 2],
  [1, 2],
  [2, 4],
  [1, 3],
  [3, 5],
  [4, 6],
  [5, 6],
  [5, 7],
  [3, 4],
  [2, 3],
]

export default function CoverageMapCard() {
  const wrapRef = useRef(null)
  const tipRef = useRef(null)
  const statesRef = useRef(null)
  const arcsRef = useRef(null)
  const hubsRef = useRef(null)

  useEffect(() => {
    if (!wrapRef.current || !tipRef.current || !statesRef.current || !arcsRef.current || !hubsRef.current) {
      return undefined
    }

    const projection = d3.geoAlbersUsa().scale(1000).translate([450, 235])
    const path = d3.geoPath(projection)

    const wrap = wrapRef.current
    const tip = tipRef.current
    const statesGroup = d3.select(statesRef.current)
    const arcsGroup = d3.select(arcsRef.current)
    const hubsGroup = d3.select(hubsRef.current)

    statesGroup.selectAll('*').remove()
    arcsGroup.selectAll('*').remove()
    hubsGroup.selectAll('*').remove()

    let active = true

    const renderMap = async () => {
      try {
        const us = await d3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
        if (!active || !us || !us.objects || !us.objects.states) {
          return
        }

        const feats = feature(us, us.objects.states).features

        statesGroup
          .selectAll('path')
          .data(feats)
          .join('path')
          .attr('class', 'pa-state')
          .attr('d', path)
          .attr('fill', fill)
          .attr('stroke', edge)
          .attr('stroke-width', 1.2)
          .attr('stroke-linejoin', 'round')
          .on('mousemove', (event) => {
            const rect = wrap.getBoundingClientRect()
            tip.textContent = 'Nationwide coverage'
            tip.style.left = `${event.clientX - rect.left + 12}px`
            tip.style.top = `${event.clientY - rect.top - 34}px`
            tip.style.opacity = '1'
          })
          .on('mouseleave', () => {
            tip.style.opacity = '0'
          })

        const points = hubs.map((hub) => projection(hub.coordinates))

        links.forEach((link) => {
          const p = points[link[0]]
          const q = points[link[1]]
          if (!p || !q) {
            return
          }

          const mx = (p[0] + q[0]) / 2
          const my = (p[1] + q[1]) / 2
          const dist = Math.hypot(q[0] - p[0], q[1] - p[1])

          arcsGroup
            .append('path')
            .attr('class', 'pa-flow')
            .attr('d', `M${p[0]},${p[1]} Q${mx},${my - dist * 0.22} ${q[0]},${q[1]}`)
            .attr('fill', 'none')
            .attr('stroke', '#F5F2E8')
            .attr('stroke-opacity', 0.45)
            .attr('stroke-width', 1.1)
        })

        points.forEach((point) => {
          if (!point) {
            return
          }

          hubsGroup
            .append('circle')
            .attr('class', 'pa-halo')
            .attr('cx', point[0])
            .attr('cy', point[1])
            .attr('r', 5)
            .attr('fill', '#F5F2E8')

          hubsGroup
            .append('circle')
            .attr('cx', point[0])
            .attr('cy', point[1])
            .attr('r', 4.5)
            .attr('fill', '#F5F2E8')
            .attr('stroke', '#1F3319')
            .attr('stroke-width', 1.6)
        })
      } catch {
        // Keep the card visible even if external topojson fails to load.
      }
    }

    renderMap()

    return () => {
      active = false
    }
  }, [])

  return (
    <section className="pa-card" aria-label="Nationwide coverage">
      <div className="pa-glow" />
      <div className="pa-grid" />

      <div className="pa-head">
        <div className="pa-brand">
          <img className="pa-logo" src="/prime-navbar-logo.svg" alt="Prime Agency Insurance logo" />
          <div>
            <p className="pa-eyebrow">Coverage area</p>
            <p className="pa-title">Serving customers nationwide</p>
          </div>
        </div>
      </div>

      <div ref={wrapRef} className="pa-mapwrap" id="pa-mapwrap">
        <div ref={tipRef} className="pa-tip" id="pa-tip" />
        <svg className="pa-svg" id="pa-svg" viewBox="0 0 900 500" role="img" aria-label="Map of the United States showing nationwide coverage with hub locations">
          <defs>
            <filter id="pa-shadow" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>
          <g ref={statesRef} id="pa-states" filter="url(#pa-shadow)" />
          <g ref={arcsRef} id="pa-arcs" />
          <g ref={hubsRef} id="pa-hubs" />
        </svg>
      </div>

      <div className="pa-foot">
        <div className="pa-stats">
          <div className="pa-stat">
            <p className="pa-stat-n">50</p>
            <p className="pa-stat-l">States licensed</p>
          </div>
          <div className="pa-stat">
            <p className="pa-stat-n">Local</p>
            <p className="pa-stat-l">Licensed agents</p>
          </div>
          <div className="pa-stat">
            <p className="pa-stat-n">Every</p>
            <p className="pa-stat-l">Region supported</p>
          </div>
        </div>

        <a className="pa-cta" href="tel:+18885922128">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#121312" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Today 1 (888) 592-2128
        </a>
      </div>

      <style jsx>{`
        .pa-card {
          --pa-bg: #121312;
          --pa-fill: #8ca87a;
          --pa-fill-hover: #b4cca3;
          --pa-cream: #f5f2e8;
          --pa-dark-green: #1f3319;
          --pa-muted: #8a9285;
          --pa-divider: rgba(245, 242, 232, 0.12);

          position: relative;
          width: 100%;
          background: var(--pa-bg);
          border-radius: 2rem;
          padding: 1.75rem;
          box-sizing: border-box;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .pa-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 55% at 50% 55%, rgba(140, 168, 122, 0.16), transparent 70%);
          pointer-events: none;
        }

        .pa-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(245, 242, 232, 0.07) 1px, transparent 1px);
          background-size: 22px 22px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 85%);
          pointer-events: none;
        }

        .pa-head {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding-bottom: 1.125rem;
          border-bottom: 0.5px solid var(--pa-divider);
        }

        .pa-brand {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .pa-logo {
          width: 56px;
          height: 40px;
          border-radius: 6px;
          flex-shrink: 0;
          object-fit: contain;
        }

        .pa-eyebrow {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--pa-fill);
          font-weight: 500;
        }

        .pa-title {
          margin: 3px 0 0;
          font-size: 18px;
          font-weight: 500;
          color: var(--pa-cream);
        }

        .pa-mapwrap {
          position: relative;
        }

        .pa-svg {
          display: block;
          width: 100%;
          margin: 8px 0 4px;
        }

        .pa-state {
          transition: fill 0.15s ease;
          cursor: default;
        }

        .pa-state:hover {
          fill: var(--pa-fill-hover);
        }

        .pa-halo {
          transform-box: fill-box;
          transform-origin: center;
          animation: pa-pulse 2.8s ease-out infinite;
        }

        .pa-flow {
          stroke-dasharray: 3 5;
          animation: pa-dash 18s linear infinite;
        }

        .pa-tip {
          position: absolute;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.12s;
          background: var(--pa-cream);
          color: var(--pa-bg);
          font-size: 12px;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 6px;
          white-space: nowrap;
          z-index: 5;
        }

        .pa-foot {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
          padding-top: 1.125rem;
          border-top: 0.5px solid var(--pa-divider);
        }

        .pa-stats {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .pa-stat {
          padding: 0 22px;
          border-left: 0.5px solid rgba(245, 242, 232, 0.14);
        }

        .pa-stat:first-child {
          padding-left: 0;
          border-left: none;
        }

        .pa-stat-n {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: var(--pa-cream);
          line-height: 1.1;
        }

        .pa-stat-l {
          margin: 3px 0 0;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--pa-muted);
        }

        .pa-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--pa-cream);
          color: var(--pa-bg);
          font-size: 14px;
          font-weight: 500;
          padding: 10px 18px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }

        .pa-cta:hover {
          background: #fff;
        }

        .pa-cta svg {
          flex-shrink: 0;
        }

        @keyframes pa-pulse {
          0% {
            transform: scale(1);
            opacity: 0.55;
          }

          80%,
          100% {
            transform: scale(3.2);
            opacity: 0;
          }
        }

        @keyframes pa-dash {
          to {
            stroke-dashoffset: -160;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pa-halo,
          .pa-flow {
            animation: none;
          }
        }

        @media (max-width: 560px) {
          .pa-card {
            padding: 1.25rem;
          }

          .pa-stat {
            padding: 0 14px;
          }

          .pa-title {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  )
}
